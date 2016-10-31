//ROUTING
paragonApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'controllerHome'
        })
        .when('/etapeBase', {
            templateUrl: 'pages/etapeBase.html',
            controller: 'controllerEtapeBase'          
        })
        .when('/etapeCaracteristiques', {
            templateUrl: 'pages/etapeCaracteristiques.html',
            controller: 'controllerEtapeCaracteristiques'          
        })
        .when('/etapeCompetences', {
            templateUrl: 'pages/etapeCompetences.html',
            controller: 'controllerEtapeCompetences'          
        })
        .when('/etapeContacts/', {
            templateUrl: 'pages/etapeContacts.html',
            controller: 'controllerEtapeContacts'
        })
        .when('/etapeEquipement', {
            templateUrl: 'pages/etapeEquipement.html',
            controller: 'controllerEtapeEquipement'          
        })
        .when('/etapeAffinites', {
            templateUrl: 'pages/etapeAffinites.html',
            controller: 'controllerEtapeAffinites'          
        })
        .when('/etapeRecapitulatif', {
            templateUrl: 'pages/etapeRecapitulatif.html',
            controller: 'controllerEtapeRecapitulatif'          
        })
});