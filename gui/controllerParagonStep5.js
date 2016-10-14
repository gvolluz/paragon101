//CONTROLLER - PARAGON STEP 5
paragonApp.controller('paragonStep5Controller', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Récapitulatif intermédiaire';
        
    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;
    
    $scope.$watch('personnage', function(newValue, oldValue){       
        personnageService.personnage = newValue;    
    });
}]);