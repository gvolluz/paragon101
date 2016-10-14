var paragonApp = angular.module('paragonApp', ['ngRoute', 'ngCookies']);

//CONTROLLER - MAIN
paragonApp.controller('mainController', ['$scope', '$log', 'personnageService', function($scope, $log, personnageService) {
    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });

}]);

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

