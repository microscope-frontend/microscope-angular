'use strict';

// Imports
var angular = require('angular');
var HomeCtrl  = require('./controllers/home/homeCtrl');
var WelcomeCtrl = require('./controllers/welcome/welcomeCtrl');

// Home sub-module definition
var home = angular.module('riaangular.home', []);
home.controller('HomeCtrl', [HomeCtrl]);
home.controller('WelcomeCtrl', [WelcomeCtrl]);

module.exports = home;