(function () {
  'use strict';

  /**
   * @ngdoc filter
   * @name todo.filter:validate
   *
   * @description
   *
   * @param {Array} input The array to filter
   * @returns {Array} The filtered array
   *
   */
  angular
    .module('todo')
    .filter('validate', validate);

  function validate() {
    return function (input) {
      var temp = [];
      angular.forEach(input, function (item) {
        var test = (item.items.length > 0) && item.userId;
        if (test) {
          temp.push(item);
        }
      });
      return temp;
    };
  }
}());
