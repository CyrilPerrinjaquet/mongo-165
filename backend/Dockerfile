# Chaque dockerfile commence par un `FROM` qui indique à partir de quelle image de base et quelle version nous allons construire notre propre image, en l'occurence nous nous basons sur l'image de node en version 14
FROM node:latest

# Nous définissons le `Working directory`, donc on pointe vers le répertoire qu'on a créé qu'on a appelé /app qui nous sert à définir le répertoir dans lequel docker va travailler
WORKDIR /app

# Nous copions tous ce qui ce trouve dans notre répertoire `host` dans le répertoire qu'on a créé qui est /app
COPY . /app/

# Nous exécutons ensuite npm install pour que toutes les dépendances nécessaires liées au projet soient installées.
RUN npm install

# Nous installons nodemon pour l'environnement de dévelopment pour que si nous ayons à faire un changement dans le répertoir backend, les changements se refléterons sur l'app directement sans avoir à rebuild la stack
RUN npm install -g nodemon

# Nous disons au container d'écouter le port 3000 pour qu'on puisse ensuite y accéder via l'extérieur, mais il n'ouvre pas le port en question tant que nous ne lions pas dans le docker-compose
EXPOSE 3000

# Nous définissons ensuite la commande à être exécuter quand nous voudrons run le container, nous utilisons donc nodemon pour exécuter le fichier server.js
CMD ["nodemon", "node-backend/server/server.js"]