'use strict';

describe('Service: ConceptionEdtService', function () {

    // load the service's module
    beforeEach(module('emploiDuTempsApp'));

    // instantiate service
    var conceptionService;
    beforeEach(inject(function (_ConceptionEdtService_) {
        conceptionService = _ConceptionEdtService_;
    }));

    it('should do something', function () {
        expect(conceptionService.getUvProfil().length).toBe(0);
    });

});