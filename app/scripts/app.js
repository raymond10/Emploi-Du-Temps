'use strict';

angular.module('emploiDuTempsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.route',
    'lvl.directives.dragdrop',
    'ui.sortable',
    'ui.bootstrap.alert',
    'ngGrid',
    'ui.bootstrap',
    'ui.bootstrap.modal',
    'ui.bootstrap.datepicker',
    'ui.bootstrap.tabs',
    'ngDragDrop'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/conceptionEdT', {
                templateUrl: 'views/conceptionedt.html',
                controller: 'conceptionEdtCtrl'
            })
            .when('/profilFormation', {
                templateUrl: 'views/profilformation.html',
                controller: 'profilFormationCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl'
            })
            .when('/detailSalle', {
              templateUrl: 'views/partial/detailsalle.html',
              controller: 'DetailsalleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
