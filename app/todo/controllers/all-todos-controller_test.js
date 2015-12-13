/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AllTodosCtrl', function () {
  var ctrl, todo, scope;

  beforeEach(module('todo'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('AllTodosCtrl', {$scope: scope});
  }));

  //set mock data
  beforeEach(inject(function () {
    scope.userId = 1;
    scope.title = "Todo #1";
    scope.addToDoForm = {};
    todo = {
      "userId": "1",
      "id": 1,
      "title": "Default Title",
      "items": [
        {
          "title": "delectus aut autem",
          "completed": true
        }
      ]
    };
    ctrl.todos = [];
    ctrl.todos.push(todo);
  }));

  it('should AllTodosCtrl to be defined', function () {
    expect(ctrl).toBeDefined();
  });

  it('it should add todo to list of todos', function () {
    scope.addToDoForm.$valid = true;
    expect(ctrl.todos.length).toBe(1);
    ctrl.addToDo();
    expect(ctrl.todos.length).toBe(2);
  });

  it("it should remove todo from the list of todos", function(){
    expect(ctrl.todos.length).toBe(1);
    ctrl.removeToDo(0, $.Event('click'));
    expect(ctrl.todos.length).toBe(0);
  });

  it("it should return line-through style for a completed todo", function(){
    var style = ctrl.testCompleted(todo);
    expect(style['text-decoration']).toBe("line-through");
  });

});
