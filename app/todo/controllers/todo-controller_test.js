/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TodoCtrl', function () {
  var ctrl;

  beforeEach(module('todo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TodoCtrl');
  }));

  it('should have ctrlName as TodoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TodoCtrl');
  });
});
