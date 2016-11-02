//DIRECTIVES
paragonApp.directive('recapPerso', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'directives/recapPerso.html',
        replace: true,
        scope:{
            showRecapitulatif: "@",
            uuid: "@",
            nom: "@",
            metatype: "@",
            axe: "@",
            carSofias: "@",
            compSofias: "@",
            contactsSofias: "@",
            totalSofias: "@",
            age: "@",
            sexe: "@",
            origine: "@",
            capital: "@",
        }
    }
});

paragonApp.directive('breadCrumb', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'directives/breadCrumb.html',
        replace: true,
        scope: {
            position: "@",
            pagePrecedente: "@",
            pageSuivante: "@"
        }
    }
});

paragonApp.directive('toolbar', function(){
    return{
        templateUrl: 'directives/toolbar.html',
        replace: true,
        scope: true
    }
});
