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

# ==============================================================================

BASE_IMAGE_NAME := gobridge
SERVICE_NAME    := website
VERSION         := 0.0.1
SERVICE_IMAGE   := $(BASE_IMAGE_NAME)/$(SERVICE_NAME):$(VERSION)

image:
	docker build \
		-f zarf/docker/dockerfile \
		-t $(SERVICE_IMAGE) \
		--build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` \
		.

# ==============================================================================

install:
	cd app/frontends/website; npm i react-scripts

tidy:
	go mod tidy
	go mod vendor

deps-upgrade:
	go get -u -v ./...
	go mod tidy
	go mod vendor
