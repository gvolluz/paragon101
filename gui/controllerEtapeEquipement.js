//CONTROLLER - Étape "Équipement"
paragonApp.controller('controllerEtapeEquipement', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Équipement';
    $scope.etapeAstuce = '';//pas utilisée, nécessite de l'html
    $scope.$parent.pagePrecedente = '#/etapeContacts/';
    $scope.$parent.pageSuivante = '#/etapeAffinites/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });
}]);