//CONTROLLER - PARAGON STEP 2
paragonApp.controller('paragonStep2Controller', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Distribution des points dans les Caractéristiques';
        
    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;
    $scope.$parent.showRecapitulatif = true;
    
    $scope.$watch('personnage', function(newValue, oldValue){       
        personnageService.personnage = newValue;    
    });
}]);