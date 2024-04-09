# INS'Astuces HdF
> L'objectif est de créer un site web simple maintenu par les étudiants pour les étudiants ingénieurs de l'INSA Hauts-de-France qui répertoriera toutes les informations importantes à savoir pour leur scolarité et leur vie étudiante.



Les premiers contenus de ce site seront:
- Un guide pour les futurs étudiants
    - Plan du campus et points repères
    - Transports
    - Logement
    - Admissions
    - Starter Packs
        - 1A, 2A et 3A : comment bien démarrer l'année et apréhender les cours
        - Méthodes de travail
    - Discuter avec les étudiants actuels
- Vie étudiante
    - Le BDE, ça sert à quoi?
    - Liste des assos de l'INSA HdF
    - Les évènements annuels
- Conseils et tutos info
    - Les logiciels et services fournis par l'UPHF
    - Comment synchroniser ses mails avec une application mobile poru reçevoir les notifs
    - Les meilleures réducs étudiantes sur les logiciels
- Administratif
    - Contacts utiles - responsables des SPE...
    - Fiches d'abscences, syllabus...












# Développement

Ce site utilise le modèle [Docusaurus](https://docusaurus.io), un projet Open Source de Facebook. Docusaurus peut être utilisé pour faire un blog et des documentations de produits en n'utilisant presque uniquement la syntaxe markdown. (+JS pour les pages). 

Pour développer le site, il est nécessaire d'installer nodeJS. Pour la publication, pas besoin de langages particuliers. Le site est transformé en fichiers statiques dans `/build` à coller directement sur l'hébergement.

## Prérequis pour développer le site

- Node.js (avec npm)

## Initialiser un site docusaurus


```bash 
    npm init docusaurus
```

## Lancer le site en local
    
```bash
    npm run start
```


## Pour déployer le projet

-> Lancer la commande `npm run build`

-> Copier le contenu du dossier `build` dans le dossier source du site web et le site static sera ok

