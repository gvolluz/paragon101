#GUI

##Export/Import phase 2

* gérer autres formats
    * csv
    * pdf

##Compétences

* supprimer les compétences de meta sur changement du meta

##Équipement

* ajouter les détails utiles 
    * dégâts pour les armes par ex.) en une propriété 'extras'
    * ['extra1', 'extra2'] <== extra par ex. "Dégâts 5", "Protection 4", etc.

##PNJs aléatoires

* ajouter fonctionnalité génération
    * combien de pnjs
    * quel metatype
    * nom de base (par ex. "Garde#" et auto un compteur)
    * création des stats vitales selon le metatype (caracs principales et dérivées utiles, compétences, équipement)
* ajouter export spécifique aux formats standards

##Sauvegarde personnage

* OAuth pour sauver la liste de persos
    * Dropbox (prio 1)
    * Google
    * Twitter
    * Facebook
    * synchro entre plusieurs postes

#API

##DB des persos "préférés"

* structure complète pas juste sauver le json; persos peuvent être privés ou publics
* sauver un perso dans la DB
* récupérer un perso depuis la DB
* base actuelle https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/
* passer à https://github.com/mevdschee/php-crud-api (ou mieux, intégrer à WP!)
