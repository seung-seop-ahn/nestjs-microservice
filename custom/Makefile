.PHONY: dev server client

dev:
	@echo "Starting server and client..."
	@make server & make client

server:
	@echo "Server starting..."
	cd server && \
		[ -d node_modules ] || npm install && \
		npm run start:dev

client:
	@echo "Client starting..."
	cd client && \
		[ -d node_modules ] || npm install && \
		npm run start:dev