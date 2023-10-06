package handlers

import (
	"context"
	"embed"
	"encoding/json"
	"fmt"
	"io/fs"
	"net/http"
	"os"
	"regexp"

	"github.com/gobridge/website/foundation/logger"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

type result struct {
	Status string
	Msg    string
}

// =============================================================================

// SetRoutes constructs the handlers value and binds all the routes
// to the default mux.
func SetRoutes(log *logger.Logger, static embed.FS, env string) error {
	fSys, err := fs.Sub(static, "static")
	if err != nil {
		return fmt.Errorf("switching to static folder: %w", err)
	}

	h := handlers{
		env:         env,
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
	env         string
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
	if h.env == "dev" && r.Method == http.MethodOptions {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		w.Header().Set("Access-Control-Max-Age", "86400")
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	ctx := r.Context()
	if traceID := r.Header.Get("x-cloud-trace-context"); traceID != "" {
		ctx = setTraceID(ctx, traceID)
	}

	body := make(map[string]interface{})
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		h.log.Print(ctx, "ERROR", "msg", err)
		sendError(ctx, h.log, w, err)
		return
	}

	contactInfo, err := json.MarshalIndent(body, "", "    ")
	if err != nil {
		h.log.Print(ctx, "ERROR", "msg", err)
		sendError(ctx, h.log, w, err)
		return
	}

	from := mail.NewEmail("GoBridge Website", "support@gobridge.org")
	subject := "Website Contact Us"
	to := mail.NewEmail("GoBridge Support", "support@gobridge.org")
	message := mail.NewSingleEmailPlainText(from, subject, to, string(contactInfo))
	client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))

	response, err := client.Send(message)
	if err != nil {
		h.log.Print(ctx, "ERROR", "msg", err)
		sendError(ctx, h.log, w, err)
		return
	}

	if response.StatusCode != http.StatusAccepted {
		h.log.Print(ctx, "ERROR", "msg", err)
		sendError(ctx, h.log, w, fmt.Errorf("client send failed with (%d)", response.StatusCode))
		return
	}

	if h.env == "dev" {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		w.Header().Set("Access-Control-Max-Age", "86400")
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(result{Status: "SUCCESS"})

	h.log.Print(r.Context(), "SUCCESS", "resp", response)
}

// =============================================================================

func sendError(ctx context.Context, log *logger.Logger, w http.ResponseWriter, err error) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusBadRequest)
	json.NewEncoder(w).Encode(result{Status: "FAILED", Msg: err.Error()})
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
