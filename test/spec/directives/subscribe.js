'use strict';

describe('Directive: subscribe', function () {

  // load the directive's module
  beforeEach(module('myAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<subscribe></subscribe>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the subscribe directive');
  }));
});
