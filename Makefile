build: 
	docker-compose build

up: 
	docker-compose up

down: 
	docker-compose down -v

sql: 
	docker exec -it db-container mongosh -h db-container