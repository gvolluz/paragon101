//CONTROLLER - Étape "Base"
paragonApp.controller('controllerEtapeBase', ['$scope', '$log', 'personnageService', function($scope, $log, personnageService) {

    $scope.etapeActuelle = 'Informations de base';
    $scope.etapeAstuce = 'Choisis ici les informations de base de ton Paragon, d\'où il vient, son nom, etc. L\'âge sert à déterminer le capital de départ, qui est aussi fonction de l\'axe choisi. Le metatype définit les Caractéristiques à privilégier (ce qui est uniquement un conseil) et les Compétences de profession (qui sont obligatoires).<br>Si tu manques d\'inspiration pour le nom, clique sur le bouton "Aha!", tu pourrais être surpris...';
    $scope.$parent.pagePrecedente = '#/';
    $scope.$parent.pageSuivante = '#/etapeCaracteristiques/';

    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;

    $scope.genererNom = function(){
        $scope.personnage.nom = $scope.personnage.nomGenerateur();
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