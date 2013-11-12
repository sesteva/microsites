'use strict';

angular.module('myAppApp')
  .directive('tvlyDate', function () {
    return {
      template: '<div>Today is ... (This is another angular directive!!)</div>',
      restrict: 'E'
      }
  });
