'use strict';

/**
 * @ngdoc function
 * @name nationlBalanceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nationlBalanceApp
 */
angular.module('nationlBalanceApp')
  .controller('MainCtrl', function ($scope, $location, $routeParams) {
 	$scope.main = [];

 	//make some globally accessible helpers
  	$scope.helpers = nationlBalanceApp.helpers;
  	
  	//set default state for main view
  	$scope.main.taxEditor = 'tax/indirectTaxes';
  	$scope.main.spendEditor = 'spend/pensions';

  	//check if anything is set in the URL 
  	$scope.helpers.getUrlParams($scope, $location);

  	//load the relevant partials 
  	$scope.editTax = 'partials/'+$scope.main.taxEditor+'.html'; 
  	$scope.editSpend = 'partials/'+$scope.main.spendEditor+'.html'; 
});


//apparently should be using services for this
var nationlBalanceApp = nationlBalanceApp || {};
nationlBalanceApp.helpers = {
   getUrlParams: function($scope, $location) {

    	var params = $location.search();  
   		
   		$.each(params, function(val, key){ 
   			console.log(val);

   			if(val.includes('.')){ //probably should clean this more for XSS
   				var path = val.split('.');
   				var fragment_one = path[0];
   				var fragment_two = path[1];

   				if(typeof $scope[fragment_one] === 'undefined'){ 
   					$scope[fragment_one] = {};
   				}

   				$scope[fragment_one][fragment_two] = key;
   			}
   			
   		});

   }
};



