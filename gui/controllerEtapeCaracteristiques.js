//CONTROLLER - Étape "Caractéristiques"
paragonApp.controller('controllerEtapeCaracteristiques', ['$scope', 'personnageService', function($scope, personnageService) {

    $scope.etapeActuelle = 'Caractéristiques';
    $scope.etapeAstuce = 'Répartis les Sofias de Caractéristiques entre les Caractéristiques principales et dérivées. Les Caractéristiques primordiales pour le metatype choisi sont mises en évidence à titre indicatif.';
    $scope.$parent.pagePrecedente = '#/etapeBase/';
    $scope.$parent.pageSuivante = '#/etapeCompetences/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;
    $scope.$parent.showRecapitulatif = true;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });

}]);