//CONTROLLER - PARAGON STEP 4
paragonApp.controller('paragonStep4Controller', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Contacts';
    $scope.$parent.pagePrecedente = '#/paragonStep3/';
    $scope.$parent.pageSuivante = '#/paragonStep5/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });
}]);