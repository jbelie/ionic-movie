'use strict';

/**
 * @ngdoc directive
 * @name angularMoviedbApp.directive:movie
 * @description
 * # movie
 */
angular.module('starter')
  .directive('movie', function () {
    return {
      templateUrl: 'templates/directives/movie.html',
      replace: true,
      restrict: 'E'
    };
  });
