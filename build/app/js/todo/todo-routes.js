(function () {
  'use strict';

  angular
    .module('todo')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('todo', {
        url: '/todo/:id',
        templateUrl: 'todo/views/todo.tpl.html',
        controller: 'TodoCtrl',
        controllerAs: 'vm'
      });

    $stateProvider
      .state('edit', {
        url: '/todo/edit/:id',
        templateUrl: 'todo/views/todo-edit.tpl.html',
        controller: 'TodoEditCtrl',
        controllerAs: 'vm'
      });

    $stateProvider
      .state('todos', {
        url: '/todos',
        templateUrl: 'todo/views/todo-all.tpl.html',
        controller: 'AllTodosCtrl',
        controllerAs: 'vm'
      });
  }
}());

//# sourceMappingURL=todo-routes.js.map
