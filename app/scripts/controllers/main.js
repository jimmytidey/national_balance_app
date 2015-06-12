'use strict';

/**
 * @ngdoc function
 * @name nationlBalanceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nationlBalanceApp
 */
angular.module('nationlBalanceApp')
  .controller('MainCtrl', function ($scope, $location) {
 	//make some globally accessible helpers 
 	  $scope.main = {};
    $scope.tax_totals = [];
  	$scope.helpers = nationlBalanceApp.helpers;
  	
  	//set default state for main view
  	$scope.main.taxEditor = 'tax/incomeTax';
  	$scope.main.spendEditor = 'spend/pensions';

  	//check if anything is set in the URL 
  	$scope.helpers.getUrlParams($scope, $location);

  	//load the relevant partials 
  	$scope.editTax = 'partials/'+$scope.main.taxEditor+'.html'; 
  	$scope.editSpend = 'partials/'+$scope.main.spendEditor+'.html'; 
});









