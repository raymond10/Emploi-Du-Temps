'use strict';

angular.module('emploiDuTempsApp')
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.message = 'Here is the main';
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);
