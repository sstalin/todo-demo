(function () {
  'use strict';

  angular
    .module('demo')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/todos');
  }
}());

//# sourceMappingURL=app-routes.js.map
