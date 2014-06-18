'use strict';

describe('Controller: PartialDetailsalleCtrl', function () {

  // load the controller's module
  beforeEach(module('emploiDuTempsApp'));

  var PartialDetailsalleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartialDetailsalleCtrl = $controller('PartialDetailsalleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
