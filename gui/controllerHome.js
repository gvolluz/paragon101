//CONTROLLER - HOME
paragonApp.controller('homeController', ['$scope', '$cookies', '$log', 'personnageService', function($scope, $cookies, $log, personnageService) {  

    $scope.etapeActuelle = 'Bienvenue';
    $scope.$parent.pagePrecedente = '#/';
    $scope.$parent.pageSuivante = '#/paragonStep1/';

    $scope.chargerCookiePerso = function(){
        var perso = $cookies.getObject(personnageService.constantes.cookiePersoNom) || {uuid:'XXX'};

        //Ne réellement charger le perso que si le cookie est valide
        if(perso.uuid !== 'XXX'){
            $scope.personnage = perso;
        }
    };

    $scope.sauverCookiePerso = function(perso){
        $cookies.putObject(personnageService.constantes.cookiePersoNom, perso);
    };

    $scope.supprimerCookiePerso = function(){
        $cookies.remove(personnageService.constantes.cookiePersoNom);
    };

    $scope.personnage.sauver = function(){
        $scope.sauverCookiePerso(personnageService.personnage);
    };

    $scope.personnage.creer = function(){
        personnageService.personnageRAZ(true, $log);

        $scope.personnage.sauver();
    }

    $scope.personnage.aleatoire = function(){
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

        $scope.personnage.sauver(personnageService.personnage);
    };

}]);