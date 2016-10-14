var paragonApp = angular.module('paragonApp', ['ngRoute', 'ngCookies']);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
paragonApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

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

