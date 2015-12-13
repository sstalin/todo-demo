/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TodoEditCtrl', function () {
  var ctrl, todo, scope;

  beforeEach(module('todo'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    todo = {
      "userId": "1",
      "id": 1,
      "title": "Default Title",
      "items": [
        {
          "title": "delectus aut autem",
          "completed": false
        }
      ]
    };
    scope.addItemForm = {};
    scope.addItemForm.$valid = true;
    scope.title = "Default";
    ctrl = $controller('TodoEditCtrl', {$scope: scope});
    ctrl.todo = todo;
  }));

  it('should have ctrlName as TodoEditCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TodoEditCtrl');
  });

  it('should have addItem defined', function () {
    expect(ctrl.addItem).toBeDefined();
  });

  it('should have removeItem defined', function () {
    expect(ctrl.removeItem).toBeDefined();
  });

  it('after add one item to todo items length should be 2', function () {
    expect(ctrl.todo.items.length).toBe(1);
    ctrl.addItem();
    expect(ctrl.todo.items.length).toBe(2);
  });

  it('after remove one item from todo should be 0', function () {
    ctrl.removeItem();
    expect(ctrl.todo.items.length).toBe(0);
  });

});
