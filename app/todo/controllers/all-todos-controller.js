(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name todo.controller:AllTodosCtrl
   *
   * @description
   *
   */
  angular
    .module('todo')
    .controller('AllTodosCtrl', AllTodosCtrl);

  AllTodosCtrl.$inject = ['TodoApi', '$scope'];

  function AllTodosCtrl(TodoApi, $scope) {
    var vm = this;
    vm.ctrlName = 'AllTodosCtrl';

    vm.todos = TodoApi.get();

    vm.handleClick = function (todo) {
      TodoApi.setActive(todo);
    };

    vm.addToDo = function () {
      var stub = {
        "userId": null,
        "id": null,
        "title": "Default Title",
        "items": []
      };
      var lastIndex = (vm.todos.length > 0)? vm.todos.length - 1 : 0;
      var newId = vm.todos[lastIndex].id + 1;

      if ($scope.addToDoForm.$valid) {
        stub.userId = $scope.userId;
        stub.title = $scope.title;
        stub.id = newId;
        vm.todos.push(stub);

        $scope.userId = null;
        $scope.title = null;
      }
    };

    vm.removeToDo = function (index, e) {
      e.stopPropagation();
      vm.todos.splice(index, 1);
    };

    vm.testCompleted = function (task) {
      var test;

      if (task.items.length > 0) {
        test = _.find(task.items, function (next) {
          return next.completed === false;
        });
        if (!test) return {"text-decoration": "line-through"};
      }
    };
  }
}());
