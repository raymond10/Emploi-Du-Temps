'use strict';

angular.module('emploiDuTempsApp')
    .controller('conceptionEdtCtrl', ['$scope', 'ConceptionEdtService', '$location', function ($scope, ConceptionEdtService, $location) {
        $scope.list = [];
        //$scope.selectedProfil = {};
        $scope.profils = [
            {label: 'Ingénieur ISI', value: 'ISI'},
            {label: 'Ingénieur MTE', value: 'MTE'},
            {label: 'Ingénieur SI', value: 'SIT'},
            {label: 'Ingénieur SM', value: 'SM' },
            {label: 'Ingénieur SRT', value: 'SRT'}
        ];
        $scope.profil = function () {
            $scope.isLoading = true;
            if ($scope.selectedProfil) {
                ConceptionEdtService.setUvProfil($scope.selectedProfil);
                $location.path('/profilFormation');
            } else {
                alert('Merci de selectionner un profil de formation');
                $scope.isLoading = false;
            }
        };
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);
