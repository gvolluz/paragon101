//CONTROLLER - HOME
paragonApp.controller('controllerHome', ['$scope', '$cookies', '$log', 'personnageService', function($scope, $cookies, $log, personnageService) { 
    
    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;
    
    $scope.etapeActuelle = 'Bienvenue';
    $scope.$parent.pagePrecedente = '#/';
    $scope.$parent.pageSuivante = '#/etapeBase/';

    $scope.personnage.creer = function(){
        personnageService.personnage.remiseAZero(true);
    }

}]);