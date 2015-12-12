/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AllTodosCtrl', function () {
  var ctrl;

  beforeEach(module('todo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AllTodosCtrl');
  }));

  it('should have ctrlName as AllTodosCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AllTodosCtrl');
  });
});
