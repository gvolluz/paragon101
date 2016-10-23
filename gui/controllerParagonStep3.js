//CONTROLLER - PARAGON STEP 3
paragonApp.controller('paragonStep3Controller', ['$scope', '$routeParams', 'personnageService', function($scope, $routeParams, personnageService) {

    $scope.etapeActuelle = 'Compétences';
    $scope.$parent.pagePrecedente = '#/paragonStep2/';
    $scope.$parent.pageSuivante = '#/paragonStep4/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });

    //Initialiser les compétences de metatype
    $scope.personnage.initialiseCompetence();    
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
