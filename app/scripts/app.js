'use strict';

/**
 * @ngdoc overview
 * @name nationlBalanceApp
 * @description
 * # nationlBalanceApp
 *
 * Main module of the application.
 */
angular
  .module('nationlBalanceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

//apparently should be using services for this
var nationlBalanceApp = nationlBalanceApp || {};
nationlBalanceApp.helpers = {};



