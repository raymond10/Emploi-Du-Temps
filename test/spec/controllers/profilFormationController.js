'use strict';

describe('Controller: profilFormationCtrl', function () {

  // load the controller's module
  beforeEach(module('emploiDuTempsApp'));

  var profilController, scopeProfil;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
      scopeProfil = $rootScope.$new();
      profilController = $controller('profilFormationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scopeProfil.awesomeThings.length).toBe(3);
  });
});
