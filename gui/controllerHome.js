//CONTROLLER - HOME
paragonApp.controller('homeController', ['$scope', '$cookies', '$log', 'personnageService', function($scope, $cookies, $log, personnageService) {  
    
    $scope.etapeActuelle = 'Bienvenue'; 
    
    $scope.chargerCookiePerso = function(uuid){
        return $cookies.getObject(uuid) || {};  
    };
    
    $scope.supprimerCookiePerso = function(uuid){
        //Supprimer le cookie physique
        $cookies.remove(uuid);
        
        //Supprimer sa trace dans la liste
        var liste = $scope.chargerCookieListe();
        
        for(var i=0; i<liste.length;i++){
            if( liste[i].uuid === uuid ){
                liste.splice(i,1);
                break;
            }
        }
        
        $scope.sauverCookieListe(liste);        
    };
    
    $scope.sauverCookiePerso = function(perso){
        $cookies.putObject(perso.uuid, perso);  
    };
      
    $scope.chargerCookieListe = function(){
        //Charger la liste
        var liste = $cookies.getObject(personnageService.constantes.cookieNomListe) || [];
        
        //Charger les cookies des persos
        for(var i=0; i<liste.length; i++){
            var perso = $scope.chargerCookiePerso(liste[i].uuid);
            liste[i].perso = perso ;
        }
        
        return liste;
    };    
        
    $scope.refreshPersonnagesListe = function(){
        //D'abord récupérer la liste du cookie
        $scope.personnagesListe = $scope.chargerCookieListe();  
            
        //Paginer la liste des sauvegardes
        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $log.debug('Length: '+$scope.personnagesListe.length);
        $log.debug('Pages : '+Math.ceil($scope.personnagesListe.length/$scope.pageSize));
        $scope.numberOfPages = function(){
            return Math.ceil($scope.personnagesListe.length/$scope.pageSize); 
        };
    }
    
    //Charger la liste actuelle
    $scope.refreshPersonnagesListe(); 
    
    $scope.personnagesListePaginationPrecedent = function() {
      if($scope.currentPage === 0){
          return false;
      }else{
          $scope.currentPage -= 1;
      }
    }
    
    $scope.personnagesListePaginationSuivant = function() {
      if($scope.currentPage === $scope.pageSize){
          return false;
      }else{
          $scope.currentPage += 1;
      }
    }
    
    $scope.sauverCookieListe = function(liste){
        //Supprimer le cookie précédent si existant
        $cookies.remove(personnageService.constantes.cookieNomListe);
        //Ajouter le cookie avec la liste actuelle
        $cookies.putObject(personnageService.constantes.cookieNomListe, liste);
    }
    
    $scope.sauverPersonnage = function(){
        var perso = personnageService.personnage;
        var nouveauPersoInfo = {
                            uuid: perso.uuid,
                            nom: perso.nom,
                            age: perso.age,
                            metatype: perso.metatype.nom,
                            axe: perso.axe
                        };
        
        var nouveauPerso = {
                            personnage: perso
                        };
        
        var listeActuelle = $scope.chargerCookieListe();
        
        var trouve = false;
        var i;
        for(i=0; i<listeActuelle.length;i++){
            if( listeActuelle[i].uuid === nouveauPersoInfo.uuid ){
                trouve = true;
                break;
            }
        }
        
        if( false === trouve ){  
            var persoInfo = {}
            listeActuelle.push(nouveauPersoInfo);
        }
        
        $scope.sauverCookieListe(listeActuelle);
        $scope.sauverCookiePerso(nouveauPerso);     
        
        $scope.refreshPersonnagesListe();
    };    
    
    $scope.chargerPersonnage = function(uuid){
        var cookie = $scope.chargerCookiePerso(uuid);
        $scope.personnage = cookie;
    };   
    
    $scope.supprimerPersonnage = function(uuid){        
        $scope.supprimerCookiePerso(uuid);     
        
        $scope.refreshPersonnagesListe();
    };

    $scope.personnageNouveau = function(){
        personnageService.personnageRAZ(true, $log);
        
        $scope.sauverPersonnage(personnageService.personnage.uuid);     
        
        $scope.refreshPersonnagesListe();
    }
    
    $scope.personnageAleatoire = function(){ 
        var personnage = $scope.personnage;
        var constantes = $scope.constantes;
        //Réinitialiser le personnage              
        personnageService.personnageRAZ(false, $log);//0-5 metatype
        var rand = personnageService.de(0,5);        
        personnage.metatype = constantes.metatypesListe[rand];
        //Caractéristiques
        //TODO: randomizer l'ordre dans lequel les Caracs sont prises
        //TODO: ajouter TACH
        //TODO: pondérer fonction du metatype (selon CARACS maîtresses)
        var min = 0;
        var max = 15;
        rand = personnageService.de(min,max);
        personnage.astuceBase(rand);
        rand = personnageService.de(min,max);
        personnage.acuiteBase(rand);
        rand = personnageService.de(min,max);
        personnage.adresseBase(rand);

        //A partir de ce point, au maximum, on a 45 sofias utilisés, donc
        //pour chaque prochain rand, on prend au maximum ce qu'il reste...
        max = (personnage.carSofias<max) ? personnage.carSofias : max;
        rand = personnageService.de(min,max);
        personnage.robustesseBase(rand);

        max = (personnage.carSofias<max) ? personnage.carSofias : max;
        rand = personnageService.de(min,max);
        personnage.determinationBase(rand);

        personnage.prestanceBase(personnage.carSofias);

        //Compétences de metatype      
        for(var i=0; i<$scope.personnage.metatype.competences.length;i++){           
            var comp = new Competence(
                $scope.personnage.metatype.competences[i],
                1,0,0,0,false
            );
            personnage.competencesListe.push( comp );
        };
        
        $scope.sauverPersonnage(personnageService.personnage.uuid);        
        $scope.personnagesListe = $scope.chargerCookieListe();
    };
    
}]);