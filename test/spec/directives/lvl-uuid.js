'use strict';

describe('Directive: lvlUuid', function () {

  // load the directive's module
  beforeEach(module('emploiDuTempsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lvl-uuid></lvl-uuid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lvlUuid directive');
  }));
});
