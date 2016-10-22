//ROUTING
paragonApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/paragonStep1', {
            templateUrl: 'pages/paragonStep1.html',
            controller: 'paragonStep1Controller'          
        })
        .when('/paragonStep2', {
            templateUrl: 'pages/paragonStep2.html',
            controller: 'paragonStep2Controller'          
        })
        .when('/paragonStep3', {
            templateUrl: 'pages/paragonStep3.html',
            controller: 'paragonStep3Controller'          
        })
        .when('/paragonStep3/:action', {
            templateUrl: 'pages/paragonStep3.html',
            controller: 'paragonStep3Controller'
        })
        .when('/paragonStep4', {
            templateUrl: 'pages/paragonStep4.html',
            controller: 'paragonStep4Controller'          
        })
        .when('/paragonStep5', {
            templateUrl: 'pages/paragonStep5.html',
            controller: 'paragonStep5Controller'          
        })
        .when('/paragonStep6', {
            templateUrl: 'pages/paragonStep6.html',
            controller: 'paragonStep6Controller'          
        })
        .when('/paragonStep7', {
            templateUrl: 'pages/paragonStep7.html',
            controller: 'paragonStep7Controller'          
        })
    /*
        .when('/paragonStep8', {
            templateUrl: 'pages/paragonStep8.html',
            controller: 'paragonStep8Controller'          
        })
        .when('/paragonStep9', {
            templateUrl: 'pages/paragonStep9.html',
            controller: 'paragonStep9Controller'          
        })
        .when('/paragonStep10', {
            templateUrl: 'pages/paragonStep10.html',
            controller: 'paragonStep10Controller'          
        })
        .when('/paragonStep11', {
            templateUrl: 'pages/paragonStep11.html',
            controller: 'paragonStep11Controller'          
        })
        .when('/paragonStep12', {
            templateUrl: 'pages/paragonStep12.html',
            controller: 'paragonStep12Controller'          
        })
        .when('/paragonStep13', {
            templateUrl: 'pages/paragonStep13.html',
            controller: 'paragonStep13Controller'          
        })*/
});