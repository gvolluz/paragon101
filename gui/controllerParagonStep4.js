//CONTROLLER - PARAGON STEP 4
paragonApp.controller('paragonStep4Controller', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Contacts';
    $scope.$parent.pagePrecedente = '#/paragonStep3/';
    $scope.$parent.pageSuivante = '#/paragonStep5/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });
}]);

paragonApp.controller('paragonStep4ContactsController', ['$scope', 'personnageService', function($scope, personnageService) {

    $scope.$watch('contact.base', function(newValue, oldValue){
        if($scope.contact.selfChanged){
            $scope.contact.selfChanged = false;
            return;
        }
        var delta = newValue-oldValue;
        personnageService.personnage.contactsSofias -= delta;

        if(personnageService.personnage.contactsSofias<0){
            personnageService.personnage.contactsSofias += delta;
            $scope.contact.base = oldValue;
            //Pour éviter l'appel récursif de cette watch
            $scope.contact.selfChanged = true;
            return oldValue;
        }
    });

}]);