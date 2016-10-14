//CONTROLLER - PARAGON STEP 1
paragonApp.controller('paragonStep1Controller', ['$scope', '$log', 'personnageService', function($scope, $log, personnageService) {
    $scope.etapeActuelle = 'Nom, âge et metatype';
    
    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;
    
    $scope.genererNom = function(){
        $scope.personnage.nom = personnageService.nomGenerateur();
    }
    
    $scope.$watch('personnage', function(newValue, oldValue){       
        personnageService.personnage = newValue;    
    });    
    
    //TODO: quand on change de metatype, il faut enlever de la liste des 
    //compétences celles du metatype précédent (éventu "warning et reset total")
    
}]);