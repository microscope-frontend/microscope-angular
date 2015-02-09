'use strict';

// Imports
var angular = require('angular');
var HomeCtrl  = require('./controllers/home/homeCtrl');
var AboutCtrl = require('./controllers/about/aboutCtrl');

// Home sub-module definition
var home = angular.module('riaangular.home', []);
home.controller('HomeCtrl', [HomeCtrl]);
home.controller('AboutCtrl', [AboutCtrl]);

module.exports = home;