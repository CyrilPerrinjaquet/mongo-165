# Chaque dockerfile commence par un `FROM` qui indique à partir de quelle image de base et quelle version nous allons construire notre propre image, en l'occurence ici l'image est node basé sur la version 18 d'alpine qui est une distribution
FROM node:latest

# Nous définissons le `Working directory`, donc on pointe vers le répertoire qu'on a créé qu'on a appelé /app qui nous sert à définir le répertoir dans lequel docker va travailler
WORKDIR /app

# Nous copions tous ce qui ce trouve dans notre répertoire `host` dans le répertoire qu'on a créé qui est /app
COPY . /app/

# Nous exécutons ensuite npm install pour que toutes les dépendances nécessaires liées au projet soient installées.
RUN npm install

# Nous disons au container d'écouter le port 8080 pour qu'on puisse ensuite y accéder via l'extérieur, mais il n'ouvre pas le port en question tant que nous ne lions pas dans le docker-compose
EXPOSE 8080

# Nous définissons ensuite la commande à être exécuter quand nous voudrons run le container, nous utilisons donc npm pour start le projet vite.js
CMD npm run dev