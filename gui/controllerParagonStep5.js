//CONTROLLER - PARAGON STEP 5
paragonApp.controller('paragonStep5Controller', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Équipement';
    $scope.$parent.pagePrecedente = '#/paragonStep4/';
    $scope.$parent.pageSuivante = '#/paragonStep6/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });
}]);