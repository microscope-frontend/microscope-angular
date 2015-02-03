'use strict';

/**
 * Router class
 */
function Router($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: '/home/controllers/home/home.html'
	})

	.when('/about', {
		templateUrl: '/home/controllers/about/about.html'
	})

	.otherwise({ redirectTo: '/' });
}

module.exports = Router;