//CONTROLLER - HOME
paragonApp.controller('homeController', ['$scope', '$cookies', '$log', 'personnageService', function($scope, $cookies, $log, personnageService) {  

    var clickEvent = new MouseEvent("click", {
            "view": window,
            "bubbles": true,
            "cancelable": false
        });
    
    $scope.constantes = personnageService.constantes;
    $scope.personnage = personnageService.personnage;
    
    $scope.etapeActuelle = 'Bienvenue';
    $scope.$parent.pagePrecedente = '#/';
    $scope.$parent.pageSuivante = '#/paragonStep1/';
    
    $scope.formatsExportation = ['json', 'LaTeX', 'pdf', 'csv'];
    $scope.formatExportation = 'json';

    $scope.personnage.creer = function(){
        personnageService.personnageRAZ(true);
    }
    
    $scope.personnage.exporter = function(){
        var perso = personnageService.exporter($scope.formatExportation);
        
        var type = 'text/plain';
        var ext = '.txt';
        
        switch($scope.formatExportation){
            case 'json':
                type = 'text/json';
                ext = '.json';
                break;
            case 'LaTeX':
                type = 'application/x-tex';
                ext = '.tex';
                break;
            case 'csv':
                type = 'text/csv';
                ext = '.csv';
                break;
            case 'pdf':
                type = 'application/pdf';
                ext = '.pdf';
                break;
        }
        
        var formBlob = new Blob([perso], { type: type });
        var a = document.getElementById('personnageExport');
        a.setAttribute('href', window.URL.createObjectURL(formBlob));
        a.download = 'Paragon-'+$scope.personnage.uuid+ext; 
        a.dispatchEvent(clickEvent);
    }

    $scope.personnage.aleatoire = function(){
        personnageService.personnageAleatoire();
    };

}]);