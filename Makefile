build: 
	docker-compose build

up: 
	docker-compose up --build

down: 
	docker-compose down -v

sql: 
	docker exec -it db-container /bin/bash