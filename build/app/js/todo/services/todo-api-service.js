(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name todo.service:TodoApi
   *
   * @description
   *
   */
  angular
    .module('todo')
    .service('TodoApi', TodoApi);

  TodoApi.$inject = ['$http'];

  function TodoApi($http) {
    var self = this;
    var URL = "data/todos.json";
    var activeTodo = {};
    var activeId = null;
    var allToDo = [];

    self.get = get;
    self.setActive = setActive;
    self.getActive = getActive;

    function setActive(todo) {
      activeTodo = todo ? todo : {};
    }

    function setByActiveId() {
      if (activeId && allToDo.length > 0) {
        var temp = _.find(allToDo, function (next) {
          return next.id == activeId;
        });
        for (var k in temp) {
          activeTodo[k] = temp[k];
        }
      }
    }

    function getActive(id) {
      if (activeTodo.id == id) return activeTodo;
      activeId = id;
      $http.get(URL).then(handler).then(setByActiveId);
      return activeTodo;
    }


    function get() {
      if (allToDo.length > 0) {
        return allToDo;
      }
      $http.get(URL).then(handler);
      return allToDo;
    }

    function handler(response) {
      var next, data;
      if (response.status == 200) {
        data = response.data;
        angular.forEach(data, function (next) {
          allToDo.push(next);
        });
      }

    }
  }
}());

//# sourceMappingURL=todo-api-service.js.map
