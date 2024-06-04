#!/bin/bash
mongoimport --host localhost:8000 --db database-165 --username root --password password --collection yourCollection --type json --file ./db/init.json --jsonArray