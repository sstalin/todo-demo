/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TodoCtrl', function () {
  var ctrl;

  beforeEach(module('todo'));

  beforeEach(inject(function ($rootScope, $controller) {
    var scope = $rootScope.$new();
    ctrl = $controller('TodoCtrl', {$scope:scope});
  }));

  it('should have ctrlName as TodoCtrl', function () {
    expect(ctrl).toBeDefined();
  });

  it('it should have todo to be defined', function () {
    expect(ctrl.todo).toBeDefined();
  });
});
