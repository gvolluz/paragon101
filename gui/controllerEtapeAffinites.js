//CONTROLLER - Étape "Affinités"
paragonApp.controller('controllerEtapeAffinites', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Affinités';
    $scope.etapeAstuce = 'Choisis ici les Affinités de ton Paragon. Pour choisir une Affinité, il suffit de cliquer dessus, elle sera automatiquement mise au bon endroit.';
    $scope.$parent.pagePrecedente = '#/etapeEquipement/';
    $scope.$parent.pageSuivante = '#/etapeRecapitulatif/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });
    
    //http://stackoverflow.com/questions/24798365/angular-how-to-make-filter-by-case-sensitive
    //https://docs.angularjs.org/api/ng/filter/filter
    //Pas clair
    $scope.comparerCategorieAffinite = function (actual, expected) {
        return (''+actual).indexOf(''+expected) > -1;
    };
}]);