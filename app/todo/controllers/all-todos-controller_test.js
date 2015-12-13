/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AllTodosCtrl', function () {
  var ctrl;

  beforeEach(module('todo'));

  beforeEach(inject(function ($rootScope, $controller) {
    var scope = $rootScope.$new();
    ctrl = $controller('AllTodosCtrl', {$scope: scope});
  }));

  it('should AllTodosCtrl to be defined', function () {
    expect(ctrl).toBeDefined();
  });
});
