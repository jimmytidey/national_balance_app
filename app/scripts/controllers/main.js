'use strict';

/**
 * @ngdoc function
 * @name nationlBalanceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nationlBalanceApp
 */
angular.module('nationlBalanceApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.headerTemplate = $scope.auth ? 'partials/header.html' : 'partials/header_login.html
  });
