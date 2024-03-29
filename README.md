# INSAstuces
# Description du projet

## Constat

Les étudiants de l’INSA HdF sont peu présents en ligne. Aucun service ne leur est complètement dédié. De nombreux “liens utiles” se balladent dans des recoins éloignés du web. beaucoup de drives, tous complémentaires sont présents. Le BDE ne possède pas de site pour lui-même mais un simple Google Drive. Certaines assos partagent leurs liens google calendar, difficile de les trouver. Aucune plateforme ne regroupe toutes les informations nécessaires à la scolarité d’un étudiant ingé INSA HdF.

Le seul INSA dont la présence en ligne soit dévelopée est l’INSA Toulouse.

Créons là !

## Projet

## Objectifs

# Contenu du site

## Applications et sites utiles

### Outils collaboratifs

- Suite Office online
- Gitlab
- kanban
- Figma - Maquettage web, Design

### Scolarité et cours

- Moodle
- Mdw
- LE drive
- BBB
- Eurêka
- Moyenne (projet de Alexandre Boisfer à intégrer : https://mes-notes-insa-hdf.fr )
- 

### Logiciels gratuits/en réduction pour les étudiants

- GitHub Premium + Copilot
- OneDrive (1 To offert avec l’email de l’uphf) et suite Office en ligne
- Microsoft 365 (3€/mois) pour les étudiants
- Logiciels JetBrains
- Matlab
- Figma for education

## Applications de l’INSA

### Le calendrier

### Moyenne

(projet de Alexandre Boisfer à intégrer : https://mes-notes-insa-hdf.fr )

### Le Drive

### Mail

### Les réseaux et discord

## Les associations de l’INSA

### Portail Association

Les membres des associations voient apparaitre leurs assos sur ce portail. S’ils sont autorisés à les manager, un bouton apparaîtra pour accéder à la bonne page de gestion des assos.

- **Le calendrier des assos**
    
    Permettre aux associations de partager les évènements, les étudiants peuvent s’abonner aux calendriers de chaque asso pour savoir ce qu’il s’y passe
    
    Les responsables de l’asso peuvent ajouter des évènements, créer, supprimer leur calendrier depuis ce portail
    
- Les infos publiques de l’asso
    
    Les responsables d’une asso peuvent gérer:
    
    - PAS le nom de l’asso
    - la description de l’asso
    - les liens rapides (réseaux, site internet, discord…)
    - visibilité des membres de l’asso selon des rôles (par exemple: ne rien montrer, montrer que le président, montrer le président , les responsables communication, montrer tous les membres)
- Administration des membres et des droits
    
    Les Hauts responsables de l’asso peuvent gérer les membres de l’asso et leurs donner des droits d’accès comme, par exemple:
    
    - La gestion du calendrier (ajout, suppression d’évènements…)
    - La gestion des infos publiques de l’association de l’association
    - L’ajout/suppression de membres
    - La gestion des rôles n’est disponible QUE pour le président

### LE site du BDE

- S’inspirer du site du BDE de strasbourg, trèèèès complet et très bien fait

[Les Services | BdE INSA Strasbourg](https://www.bde-insas.fr/services)

- Site de l’amicale INSA Toulouse (pas ouf le contenu mais mieux que HDF, regroupement des services étudiants dans une appli)

[Amicale des Élèves de l'INSA de Toulouse](https://amicale-insat.fr/)

### Cartes Membre BDE et site partenaires

Dans le futur, il est possible que le BDE se fasse une longue liste de partenaires à valenciennes et sa périphérie. Des restaurateurs, des boutiques, des lieux de loisirs pourraient proposer des tarifs avantageux pour les étudiants de l’INSA. Le BDE pourrait alors se tourner vers la solution de cartes membre avec QR code vérifiable pour accéder aux offres partenaires.

Il faudra alors un site internet permettant aux partenaires de vérifier la validité d’une carte membre en scannant le QR Code ou en rentrant l’id de la carte.

# Cybersécurité

L’ensemble des sites pourra accéder à une base de donnée contenant des informations confidentielles sur les utilisateurs: numéros étudiants, emails professionnels, éventuellement codes ent, numéros de téléphone, appartenance à des associations… Il est donc impératif d’assurer la sécurité de ces données confidentielles. Voici les protocoles mis en place pour rendre impossible toute duite de données

## Règles de sécurité pour le stockage des données

- Chaque site ou sous-site possèdera sa propre base de données pour stocker ses propres informations
    
    ### Les principales bases de données
    
    - users - ensemble des utilisateurs, leurs informations et leurs rôles
    - status - activation/désactivation des fonctions et services des sites
    - numeros etudiants - numéros étudiants des étudiants ayant enregistré le leur avec les autorisations de partage
    - IP bannies - listes des ip qui ont abusé du serveur
    - Mots de passe interdits - mots de passe interdits car trop communs
- Les mots de passes des comptes hébergeur, bases de données… doivent être changés tous les ans au minimum

## Règles de sécurité pour les sous-sites

- Aucun des sous-sites ne doit avoir la possibilité d’accéder aux données des bases de données
- Les sous-sites n’auront accès qu’aux informations fournies par la variable de session et ne pourront en aucun cas modifier ou télécharger d’autres informations sur les utilisateurs
- Les sous-sites ont l’interdiction de collecter les données des utilisateurs sans leur consentement ou de créer une copie des informations fournies dans les variables de session.
- Les bases de données mises à la disposition des développeurs des sous-sites doivent être le seul moyen de stocker des informations sur les utilisateurs. Les administrateurs doivent avoir accès à cette base de données quel qu’en soit son contenu