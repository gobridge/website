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

SERVICE_IMAGE := us-east1-docker.pkg.dev/gobridge-website/gobridge-website/prod-image:0.0.1

image:
	docker build \
		-f zarf/docker/dockerfile \
		-t $(SERVICE_IMAGE) \
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

# ==============================================================================

gcloud-init:
	gcloud init

gcloud-set:
	gcloud config set project gobridge-website

gcloud-deploy:
	gcloud run deploy --image $(SERVICE_IMAGE)

gcloud-default-region:
	gcloud config set run/region us-east1

gcloud-logs:
	https://console.cloud.google.com/cloud-build/builds/cd97dd6b-85fb-49aa-b671-f21c1898b840?project=646847685889

gcloud-config-docker:
	gcloud auth configure-docker us-east1-docker.pkg.dev

gcloud-tag:
	docker tag gobridge/website:0.0.1 us-east1-docker.pkg.dev/gobridge-website/gobridge-website/prod-image:0.0.1

gcloud-push:
	docker push $(SERVICE_IMAGE)
