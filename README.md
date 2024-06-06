# Welcome!

Cette application à été réalisée dans le cadre du module 165.
Malheureusement, nous n'avons pas réussi à la faire fonctionner, beaucoup de problèmes ont été recontrés.
Seulement la db marche, l'intégration entre backend et frontend ne fonctionne pas.

Nous avons choisi de faire avec Docker, voici les étapes pour pouvoir déployer l'app :

## 1. Prérequis
Assurer vous d'avoir les différentes commandes installées sur votre PC :
  * Node.js + npm
  * docker
  * make

## 2. Une fois ces commandes installées, vous pouvez build les images :
```bash
$ make build
```

## 3. Puis lancer les containers : 
```bash
$ make up
```

Le container back ne fonctionne pas, vous pouvez regarder que le container db marche cependant.

## 4. Entrer dans le container db :
```bash
$ make sql
```

Une fois dedans, vous pouvez exécuter :
```bash
mongosh --host db-container -u root -p password
```

Et voir que la db "epsic" a été créée.