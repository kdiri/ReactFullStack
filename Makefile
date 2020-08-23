.PHONY: help

.DEFAULT_GOAL := help

create: ## Run postgresql
	@docker run --name orm-postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=react -e POSTGRES_DB=mydb -p 5432:5432 -d postgres

remove: ## Stop postgresql
	@docker stop orm-postgres && docker rm -f orm-postgres

help:
	@echo 'create 	make create'
	@echo 'remove	make remove'
