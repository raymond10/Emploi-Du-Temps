'use strict';

angular.module('emploiDuTempsApp')
    .controller('aboutCtrl', ['$scope', function ($scope) {
        $scope.name = 'Ray';
        $scope.times = [
            {time: '9:00', visitor: '12'},
            {time: '10:00', visitor: '24'},
            {time: '11:00', visitor: '48'},
            {time: '12:00', visitor: '96'},
            {time: '13:00', visitor: '192'},
            {time: '14:00', visitor: '384'},
            {time: '15:00', visitor: '768'}
        ];
        $scope.sayHello = function () {
            $scope.greeting = 'Hello ' + $scope.name;
        }
        $scope.list1 = {title: 'Déplace moi!!'};
        $scope.list2 = {};
        $scope.list3 = [
            { 'title': 'L', 'drag': true },
            { 'title': 'O', 'drag': true },
            { 'title': 'M', 'drag': true },
            { 'title': 'L', 'drag': true },
            { 'title': 'G', 'drag': true },
            { 'title': 'U', 'drag': true }
        ];
        $scope.dropCallback = function(title, $index) {
            if ($scope.list3.map(function(item) { return item.title; }).join('') === 'GOLLUM') {
                $scope.list3.forEach(function(value, key) { $scope.list3[key].drag = false; });
            }
        };
    }]);