#!/bin/bash
mongoimport --host localhost --db database-165 --username root --password password --authenticationDatabase admin --collection yourCollection --type json --file init.json --jsonArray