'use strict';

describe('Directive: lvlDragDrop', function () {

  // load the directive's module
  beforeEach(module('emploiDuTempsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lvl-drag-drop></lvl-drag-drop>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lvlDragDrop directive');
  }));
});
