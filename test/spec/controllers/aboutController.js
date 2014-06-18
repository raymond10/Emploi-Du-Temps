'use strict';

describe('Controller: aboutCtrl', function () {

    // load the controller's module
    beforeEach(module('emploiDuTempsApp'));

    var aboutController, aboutScope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        aboutScope = $rootScope.$new();
        aboutController = $controller('aboutCtrl', {
            $scope: aboutScope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function () {
            // assertion
            expect(aboutScope.greeting).toBeUndefined();
            // code de test
            aboutScope.sayHello();
            // assertion
            expect(aboutScope.greeting).toEqual("Hello Ray");
        });
});