//CONTROLLER - PARAGON STEP 3
paragonApp.controller('paragonStep3Controller', ['$scope', '$routeParams', 'personnageService', function($scope, $routeParams, personnageService) {

    $scope.etapeActuelle = 'Distribution des points dans les Compétences';
    $scope.$parent.pagePrecedente = '#/paragonStep2/';
    $scope.$parent.pageSuivante = '#/paragonStep4/';

    $scope.action = $routeParams.action || false;
    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });

    //Initialiser les compétences de metatype
    var compActuelles = $scope.personnage.competencesListe;
    var compDefaut = $scope.personnage.metatype.competences;
    for(var i=0; i<compDefaut.length;i++){
        //Ne créer que si la compétence n'est pas encore listéefor
        var trouve = false;
        for(var j=0; j<compActuelles.length; j++){
            if( compActuelles[j].nom === compDefaut[i] ){
                trouve = true;
                break;
            }
        }

        if(!trouve){
            var comp = new Competence(
                compDefaut[i],
                1,0,0,0,false
            );
            compActuelles.push( comp );
        }
    }

    $scope.ajoutCompetence = function(){
        var comp = new Competence(
            'NommezVotreCompétence',
            0,0,0,0,false
        );
        $scope.personnage.competencesListe.push( comp );
    }

    $scope.supprimerCompetence = function(comp){
        var index = $scope.personnage.competencesListe.indexOf(comp);
        $scope.personnage.competencesListe.splice(index,1);
        //Resetter les sofias!
        $scope.personnage.compSofias += comp.base;
    }

}]);

paragonApp.controller('paragonStep3CompetencesController', ['$scope', 'personnageService', function($scope, personnageService) {

    $scope.$watch('competence.base', function(newValue, oldValue){
        if($scope.competence.selfChanged){
            $scope.competence.selfChanged = false;
            return;
        }
        var delta = newValue-oldValue;
        personnageService.personnage.compSofias -= delta;

        if(personnageService.personnage.compSofias<0){
            personnageService.personnage.compSofias += delta;
            $scope.competence.base = oldValue;
            //Pour éviter l'appel récursif de cette watch
            $scope.competence.selfChanged = true;
            return oldValue;
        }
    });

}]);
