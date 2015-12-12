(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name todo.controller:TodoEditCtrl
   *
   * @description
   *
   */
  angular
    .module('todo')
    .controller('TodoEditCtrl', TodoEditCtrl);

  TodoEditCtrl.$inject = ['TodoApi', '$location', '$scope'];

  function TodoEditCtrl(TodoApi, $location, $scope) {
    var vm = this;
    var id = $location.path().split('/').pop();
    vm.ctrlName = 'TodoEditCtrl';

    vm.todo = TodoApi.getActive(id);

    vm.addItem = addItem;
    vm.removeItem = removeItem;

    function removeItem(index){
       vm.todo.items.splice(index, 1);
    }

    function addItem(){
      if($scope.addItemForm.$valid){
        vm.todo.items.push({title: $scope.title, completed:false});
        $scope.title = null;
      }
    }
  }
}());
