//CONTROLLER - PARAGON STEP 4
paragonApp.controller('paragonStep4Controller', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Choix de l\'Axe';
        
    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;
    
    $scope.$watch('personnage', function(newValue, oldValue){       
        personnageService.personnage = newValue;    
    });
    
    $scope.augmenterHerakles = function(carac){
        switch(carac){
            case 'acuite':
                $scope.personnage.acuiteAxeAuto = 6;
                break;
            case 'adresse':
                $scope.personnage.adresseAxeAuto = 6;
                break;
            case 'astuce':
                $scope.personnage.astuceAxeAuto = 6;
                break;
            case 'determination':
                $scope.personnage.determinationAxeAuto = 6;
                break;
            case 'prestance':
                $scope.personnage.prestanceAxeAuto = 6;
                break;
            case 'robustesse':
                $scope.personnage.robustesseAxeAuto = 6;
                break;
        }
        
        //Et dans tous les cas
        $scope.personnage.tachyosAxeAuto += 10;
        if($scope.personnage.tachyosAxeAuto>20){
            $scope.personnage.tachyosAxeAuto = 20;
        }        
    }
}]);