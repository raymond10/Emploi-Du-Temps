'use strict';

describe('Service: Authenticationservice', function () {

  // load the service's module
  beforeEach(module('emploiDuTempsApp'));

  // instantiate service
  var Authenticationservice;
  beforeEach(inject(function (_Authenticationservice_) {
    Authenticationservice = _Authenticationservice_;
  }));

  it('should do something', function () {
    expect(!!Authenticationservice).toBe(true);
  });

});
