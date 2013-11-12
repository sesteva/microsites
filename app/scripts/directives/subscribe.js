'use strict';

angular.module('myAppApp')
  .directive('tvlySubscribe', function () {
    return {
//      template: '<div><input name="email" type="email"/></div>',
      templateUrl: 'views/subscribe/subscribe.html',
      restrict: 'E'
    };
  });
