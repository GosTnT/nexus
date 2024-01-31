.PHONY: docker
DOCKER_COMPOSE_PATH = docker-compose.yml
DOCKER_FILE_PATH = apps/api/Dockerfile

docker-up:
	docker compose -f $(DOCKER_COMPOSE_PATH) up

docker-down:
	docker compose -f $(DOCKER_COMPOSE_PATH) down

docker-build:
	docker build -f $(DOCKER_FILE_PATH) .
