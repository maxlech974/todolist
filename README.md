# Ma petite TodoList

Un projet TodoList pour montrer les compétences acquises que ça soit côté Back et côté Front.

**Développé en avec:**
- Node.JS: 14.17.0
- Php 8 et Adminer


## FrameWork, Librairie Bundle

### Front

- JavaScript
- JSX
- React (Librairie):
    - Redux
    - Axios
    - BootStrap
    - React-router-dom
    - node Sass
    - redux-devtools-extensions
- WebPack
- 
### Back

- Symfony
  - Api Platform
  - JWT Token
  - Fixure
  - ORM : Doctrine
  - Serializer

### IDE et outils

- VSCode
- Insomnia
  
## Lancement du projet

Pour démarrer le projet, se placer dans le dossier Back.
Effectuer les commandes:

```bash
//configurer environnment local
bin/console d:d:c
```

```bash
bin/console d:m:m
```

```bash
bin.console d:f:l
```

```bash
php -S 0.0.0.0:8080 -t public
```

puis se placer dans le dossier front et lancer un serveur de développement (le projet peut aussi être build mais il n'est pas terminé)

```bash
yarn start
```

## Difficultés rencontrées

Problème lors se l'authentification en JWT, token bien reçu mais problème lors du renvoie du Token dans le Header.


## Realisation Notable

- Front
  - Le composeant Input : que je peux utiliser sur tous les champs input en leur donnant un nom et une valeur je peux le réutiliser et donc factoriser mon code le plus possible