//CONTROLLER - Étape "Récapitulatif"
paragonApp.controller('controllerEtapeRecapitulatif', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Récapitulatif';
    $scope.etapeAstuce = 'Tu peux imprimer la feuille de personnage du Paragon en cliquant sur le bouton d\'impression.';
    $scope.$parent.pagePrecedente = '#/etapeAffinites/';
    //Retour à Home
    $scope.$parent.pageSuivante = '#/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });
}]);