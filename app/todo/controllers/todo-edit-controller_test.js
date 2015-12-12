/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TodoEditCtrl', function () {
  var ctrl;

  beforeEach(module('todo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TodoEditCtrl');
  }));

  it('should have ctrlName as TodoEditCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TodoEditCtrl');
  });
});
