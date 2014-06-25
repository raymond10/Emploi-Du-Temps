'use strict';

/**
 * @ngdoc directive
 * @name emploiDuTempsApp.directive:carousselProfil
 * @description
 * # carousselProfil
 */
angular.module('emploiDuTempsApp')
  .directive('carousselProfil', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the carousselProfil directive');
      }
    };
  });
