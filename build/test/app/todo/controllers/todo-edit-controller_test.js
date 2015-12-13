/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TodoEditCtrl', function () {
  var ctrl;

  beforeEach(module('todo'));

  beforeEach(inject(function ($rootScope, $controller) {
    var scope = $rootScope.$new();
    ctrl = $controller('TodoEditCtrl', {$scope:scope});
  }));

  it('should have ctrlName as TodoEditCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TodoEditCtrl');
  });
});
