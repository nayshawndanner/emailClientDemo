'use strict';

angular.module('emailClientApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
