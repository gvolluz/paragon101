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
            compSofias: "@"
        }
    }
});

paragonApp.directive('breadCrumb', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'directives/breadCrumb.html',
        replace: true,
        scope: {
            pagePrecedente: "@",
            pageSuivante: "@"
        }
    }
});
