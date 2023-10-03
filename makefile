# Check to see if we can use ash, in Alpine images, or default to BASH.
SHELL_PATH = /bin/ash
SHELL = $(if $(wildcard $(SHELL_PATH)),/bin/ash,/bin/bash)

.PHONY: build
build:
	npm run build

run:
	go run go/app/services/website/main.go

build-run: build run