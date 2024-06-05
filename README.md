# Welcome!

Cette application à été réalisée dans le cadre du module 165.

Nous avons choisi de faire avec Docker, voici les étapes pour pouvoir déployer l'app :

1. Prérequis
Assurer vous d'avoir les différentes commandes installées sur votre PC :
  * Node.js + npm
  * docker
  * make

2. Une fois ces commandes installées, vous pouvez build les images :
```bash
$ make build
```

3. Puis lancer les containers : 
```bash
$ make up
```

4. Et voilà! l'application tourne et vous pouvez la voir à l'adresse suivante :

*http://localhost:8080/*
