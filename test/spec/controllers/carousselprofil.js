'use strict';

describe('Controller: CarousselprofilCtrl', function () {

  // load the controller's module
  beforeEach(module('emploiDuTempsApp'));

  var CarousselprofilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarousselprofilCtrl = $controller('CarousselprofilCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
