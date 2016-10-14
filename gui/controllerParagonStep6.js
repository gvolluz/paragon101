//CONTROLLER - PARAGON STEP 6
paragonApp.controller('paragonStep6Controller', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'ETAPE 6';
        
    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;
    
    $scope.$watch('personnage', function(newValue, oldValue){       
        personnageService.personnage = newValue;    
    });
}]);