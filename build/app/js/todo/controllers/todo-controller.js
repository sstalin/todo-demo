(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name todo.controller:TodoCtrl
   *
   * @description
   *
   */
  angular
    .module('todo')
    .controller('TodoCtrl', TodoCtrl);

  TodoCtrl.$inject = ['TodoApi', '$location'];

  function TodoCtrl(TodoApi, $location) {
    var vm = this;
    var id = $location.path().split('/').pop();
    vm.ctrlName = 'TodoCtrl';

    vm.todo = TodoApi.getActive(id);

  }
}());

//# sourceMappingURL=todo-controller.js.map
