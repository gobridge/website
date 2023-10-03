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
	fileServer := http.FileServer(http.Dir("build"))
	fileMatcher := regexp.MustCompile(`\.[a-zA-Z]*$`)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if !fileMatcher.MatchString(r.URL.Path) {
			http.ServeFile(w, r, "build/index.html")
		} else {
			fileServer.ServeHTTP(w, r)
		}
	})

	log.Print("Listening on 0.0.0.0:80...")
	err := http.ListenAndServe("0.0.0.0:80", nil)
	if err != nil {
		return err
	}

	return nil
}
