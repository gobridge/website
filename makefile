# Check to see if we can use ash, in Alpine images, or default to BASH.
SHELL_PATH = /bin/ash
SHELL = $(if $(wildcard $(SHELL_PATH)),/bin/ash,/bin/bash)

start:
	cd app/frontends/website; npm run start

build:
	cd app/frontends/website; npm run build

run:
	go run app/services/website/main.go

build-run: build run

install:
	cd app/frontends/website; npm i react-scripts
