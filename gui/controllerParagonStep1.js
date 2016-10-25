//CONTROLLER - PARAGON STEP 1
paragonApp.controller('paragonStep1Controller', ['$scope', '$log', 'personnageService', function($scope, $log, personnageService) {

    $scope.etapeActuelle = 'Nom, âge et metatype';
    $scope.$parent.pagePrecedente = '#/';
    $scope.$parent.pageSuivante = '#/paragonStep2/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.genererNom = function(){
        $scope.personnage.nom = personnageService.nomGenerateur();
    }

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });
    
    $scope.$watch('personnage.metatype', function(newValue, oldValue){
        if(oldValue !== newValue){
            personnageService.personnage.changementMetatype(oldValue, newValue); 
        }
    });
}]);