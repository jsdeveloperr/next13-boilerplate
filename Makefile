.PHONY: build-development
build-development: ## Build the development docker image.
	docker build -t in-dev -f Dockerfile.development .

.PHONY: start-development
start-development: ## Start the development docker container.
	docker run --name in-dev -p 8080:80 in-dev

.PHONY: stop-development
stop-development: ## Stop the development docker container.
	docker stop in-dev && docker rm -f in-dev

.PHONY: build-staging
build-staging: ## Build the staging docker image.
	docker build -t in-staging -f Dockerfile.staging .

.PHONY: start-staging
start-staging: ## Start the staging docker container.
	docker run --name in-staging -p 8080:80 in-staging

.PHONY: stop-staging
stop-staging: ## Stop the staging docker container.
	docker stop in-staging && docker rm -f in-staging

.PHONY: build-production
build-production: ## Build the production docker image.
	docker build -t in-prod -f Dockerfile.production .

.PHONY: start-production
start-production: ## Start the production docker container.
	docker run --name in-prod -p 8080:80 in-prod

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker stop in-prod && docker rm -f in-prod

.PHONY: build-test
build-test: ## Build the test docker image.
	docker build -t in-test -f Dockerfile.test .

.PHONY: start-test
start-test: ## Start the test docker container.
	docker run --name in-test -p 8080:80 in-test

.PHONY: stop-test
stop-test: ## Stop the test docker container.
	docker stop in-test && docker rm -f in-test
