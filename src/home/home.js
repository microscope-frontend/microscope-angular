'use strict';

// Imports
var angular = require('angular');
var HomeCtrl  = require('./controllers/home/home');
var AboutCtrl = require('./controllers/about/about');

/**
 * Home module definition
 */
var home = angular.module('riaangular.home', []);
home.controller('HomeCtrl', [HomeCtrl]);
home.controller('AboutCtrl', [AboutCtrl]);

module.exports = home;