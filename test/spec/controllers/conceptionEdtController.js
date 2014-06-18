'use strict';

describe('Controller: conceptionEdtCtrl', function () {

  // load the controller's module
  beforeEach(module('emploiDuTempsApp'));

  var conceptionController, conceptionScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    conceptionScope = $rootScope.$new();
    conceptionController = $controller('conceptionEdtCtrl', {
      $scope: conceptionScope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(conceptionScope.awesomeThings.length).toBe(3);
  });
});
