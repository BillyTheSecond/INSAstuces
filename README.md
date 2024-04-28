![GitHub Badge juste pour faire beau](https://img.shields.io/badge/INS'Astuces-HdF-pink?style=for-the-badge&logo=github&logoColor=white) 
![Nombre total de Commits GitHub](https://img.shields.io/github/commit-activity/t/billyTheSecond/INSAstuces?style=for-the-badge)
![Nombre d'issues ouvertes](https://img.shields.io/github/issues/billyTheSecond/INSAstuces?style=for-the-badge)

# INS'Astuces HdF 
_L'objectif est de créer un site web simple maintenu par les étudiants pour les étudiants ingénieurs de l'INSA Hauts-de-France qui répertoriera toutes les informations importantes à savoir pour leur scolarité et leur vie étudiante._

<br>

> **Note :**<br>
> Le site n'est pas accessible à tous pour le moment

<br>

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





# Ajouter - modifier la page de mon asso

Pour modifier les informations - logo - photos - liens associés à ton association sur INS'Astuces, tu peux ouvrir une issue sur ce dépôt en précisant les modifications à apporter. N'hésite pas à joindre en pièce jointe les logos ou images que tu souhaites modifier ou ajouter.

[Ouvrir une issue](https://github.com/billyTheSecond/INSAstuces/issues/new)

> **Note :**<br>
> Si tu souhaites demander une modification en privé, tu peux contacter directement un des contributeurs du projet.

## Ajouter une nouvelle association
Pour ajouter une association, c'est la même procédure! Ouvre une issue en précisant les informations à ajouter et les images à joindre. Les responsables du projet INS'Astuces se chargeront de publier les modifications

### Informations à fournir
- Nom de l'association
- Logo
- Statut (club ou asso)
- Liens des réseaux à mettre en avant _(conseillé: 2 à 3 liens max)_
- Description courte _(<= 80 caractères espaces compris) à mettre sur la page [astuces.insahdf.fr/vie-etudiante/assos-et-clubs](https://astuces.insahdf.fr/vie-etudiante/assos-et-clubs)_
- Description plus détaillée _(<= 250 caractères espaces compris) à mettre sur la page dédiée à l'association_
- Cover de la page asso (note: l'image de fond est floutée)


    > **Logo**
    > - **Ratio:** Logo carré <br/>
    > - **Résolution idéale:** 600px x 600px<br/>
    > - **Formats acceptés:** favoriser .svg et .webp  (les autres formats seront convertis en .webp) <br/>
    > - **Note:** Si votre logo a un fond transparent, assurez-vous qu'il soit bine lisible sur un fond noir et un fond blanc (que le logo soit bien adapté aux modes nuit et jour)

    >  **Exemples de liens pertinents**
    >- Site internet
    >- Instagram
    >- Lien d'invitation Discord
    >- LinkedIn
    >- Spotify/Deezer...

[Ouvrir une issue pour ajouter une association ou un club](https://github.com/billyTheSecond/INSAstuces/issues/new)

### Exemple des aperçus
![Aperçu de la page des assos](INSAstuces/static/img/insastuces/demo/exemple_grand_apercu.png)


## Ajouter un contenu à la page de mon asso
Chaque asso possède par défaut une page avec une bannière. Il est possible de rajouter du contenu à cette page pour mettre en avant vos activités, vous présenter. Ce site sera principalement consulté par les futurs étudiants, c'est ici que vous pourrez séduire vos futures recrues.

Le contenu de cette page sera écrit en Markdown. Vous ne savez pas ce que c'est ? Pas de soucis! Envoyez nous ce que vous voulez y mettre et on se chergera de le mettre dans le bon format.



# Développement

Ce site utilise le modèle [Docusaurus](https://docusaurus.io), un projet Open Source de Facebook. Docusaurus peut être utilisé pour faire un blog et des documentations de produits en utilisant presque uniquement la syntaxe markdown. (+JS pour les pages). 

Pour développer le site, il est nécessaire d'installer nodeJS. Pour la publication, pas besoin de langages particuliers. Le site est transformé en fichiers statiques dans `/build` à coller directement sur l'hébergement.

## Prérequis pour développer le site

- Node.js (avec npm)

## Initialiser un site docusaurus


```bash 
    npm init docusaurus
```

## Lancer le site
    
### Lancer le site en local sur une machine
```bash
    npm run start
```
Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

### Lancer le site sur un réseau local

```bash
    npm run start -- --port 80 --host 0.0.0.0
    # En remplaçant 0.0.0.0 par l'adresse IP de la machine
```

## Pour déployer le projet

-> Lancer la commande `npm run build`

-> Copier le contenu du dossier `build` dans le dossier source du site web et le site static sera ok




> Inspirations : [WikiEtud INSA Toulouse](https://wiki.etud.insa-toulouse.fr/)