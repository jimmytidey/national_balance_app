'use strict';

/**
 * @ngdoc function
 * @name nationlBalanceApp.controller:incomeTaxCtrl
 * @description
 * # MainCtrl
 * Controller fro incomeTax
 */
angular.module('nationlBalanceApp')
  .controller('incomeTaxCtrl', function ($scope, $location) {
      
    $scope.incomeTax = {};
    $scope.tax_totals.push({name: 'Income Tax', value: 0})

    //set default state for main view
    $scope.incomeTax.var1 = 200; 


    //check if anything is set in the URL 
    $scope.helpers.getUrlParams($scope, $location);

    $scope.calculateIncomeTax = function() { 
      

      $scope.helpers.renderTax();
    };

    $scope.helpers.renderTax();
});

