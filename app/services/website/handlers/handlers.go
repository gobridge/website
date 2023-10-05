package handlers

import (
	"context"
	"embed"
	"encoding/json"
	"fmt"
	"io/fs"
	"net/http"
	"regexp"

	"github.com/gobridge/website/foundation/logger"
)

// SetRoutes constructs the handlers value and binds all the routes
// to the default mux.
func SetRoutes(log *logger.Logger, static embed.FS) error {
	fSys, err := fs.Sub(static, "static")
	if err != nil {
		return fmt.Errorf("switching to static folder: %w", err)
	}

	h := handlers{
		log:         log,
		static:      static,
		fileServer:  http.FileServer(http.FS(fSys)),
		fileMatcher: regexp.MustCompile(`\.[a-zA-Z]*$`),
	}

	http.HandleFunc("/", h.index)
	http.HandleFunc("/api/contact", h.contactUs)

	return nil
}

// =============================================================================

type handlers struct {
	log         *logger.Logger
	static      embed.FS
	fileServer  http.Handler
	fileMatcher *regexp.Regexp
}

func (h *handlers) index(w http.ResponseWriter, r *http.Request) {
	if !h.fileMatcher.MatchString(r.URL.Path) {
		h.log.Print(r.Context(), "request", "url", r.URL.Path)

		ctx := r.Context()
		if traceID := r.Header.Get("x-cloud-trace-context"); traceID != "" {
			ctx = setTraceID(ctx, traceID)
		}

		p, err := h.static.ReadFile("static/index.html")
		if err != nil {
			h.log.Print(ctx, "ERROR", "msg", err)
			return
		}

		w.Write(p)
		return
	}

	h.fileServer.ServeHTTP(w, r)
}

func (h *handlers) contactUs(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	// ctx := r.Context()
	// if traceID := r.Header.Get("x-cloud-trace-context"); traceID != "" {
	// 	ctx = setTraceID(ctx, traceID)
	// }

	static := struct {
		Status string
	}{
		Status: "OK",
	}
	json.NewEncoder(w).Encode(static)
}

// =============================================================================

type ctxKey int

const key ctxKey = 1

func setTraceID(ctx context.Context, traceID string) context.Context {
	return context.WithValue(ctx, key, traceID)
}

// GetTraceID returns the trace id from the context if one exists.
func GetTraceID(ctx context.Context) string {
	traceID, ok := ctx.Value(key).(string)
	if !ok {
		return "00000000-0000-0000-0000-000000000000"
	}

	return traceID
}
