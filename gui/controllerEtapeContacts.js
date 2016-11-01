//CONTROLLER - Étape "Contacts"
paragonApp.controller('controllerEtapeContacts', ['$scope', 'personnageService', function($scope, personnageService) {
    $scope.etapeActuelle = 'Contacts';
    $scope.etapeAstuce = '';//pas utilisée, nécessite de l'html
    $scope.$parent.pagePrecedente = '#/etapeCompetences/';
    $scope.$parent.pageSuivante = '#/etapeEquipement/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.$watch('personnage', function(newValue, oldValue){
        personnageService.personnage = newValue;
    });
    
    $scope.copyToClipboard = function(event) {
        var element = event.target;
        $scope.clipBoard = $(element).html();
        
        $(element).siblings(element).removeClass('active');
        $(element).addClass('active');        
    }
    
    $scope.pasteFromClipboard = function(contact){
        if($scope.clipBoard){
            contact.occupation = $scope.clipBoard;
        }
        else{
            alert('Le presse-papiers est vide! Clique sur une occupation dans la liste ci-dessous.');
        }
    }
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