package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"regexp"
)

func main() {
	if err := run(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func run() error {
	fileServer := http.FileServer(http.Dir("app/services/website/static"))
	fileMatcher := regexp.MustCompile(`\.[a-zA-Z]*$`)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if !fileMatcher.MatchString(r.URL.Path) {
			http.ServeFile(w, r, "app/services/website/static/index.html")
		} else {
			fileServer.ServeHTTP(w, r)
		}
	})

	log.Print("Listening on 0.0.0.0:3000...")
	err := http.ListenAndServe("0.0.0.0:3000", nil)
	if err != nil {
		return err
	}

	return nil
}
