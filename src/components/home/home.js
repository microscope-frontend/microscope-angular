'use strict';

// Imports
var angular = require('angular');
var HomeCtrl  = require('./controllers/homeCtrl');
var WelcomeCtrl = require('./controllers/welcomeCtrl');

// Home sub-module definition
var home = angular.module('app.home', []);
home.controller('HomeCtrl', [HomeCtrl]);
home.controller('WelcomeCtrl', [WelcomeCtrl]);

module.exports = home;