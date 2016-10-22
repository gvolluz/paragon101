//CONTROLLER - PARAGON STEP 7
paragonApp.controller('paragonStep7Controller', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'ETAPE 7';
    $scope.$parent.pagePrecedente = '#/paragonStep6/';
    //Retour à Home
    $scope.$parent.pageSuivante = '#/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });
}]);