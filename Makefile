build: 
	docker compose build

up: 
	docker compose up

sql: 
	docker exec -it db-container mongosh --port 27040