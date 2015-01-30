'use strict';

/**
 * Router class
 */
function Router ($routeProvider) {
	
	$routeProvider

	.when('/', {
		templateUrl: '/templates/home/controllers/home.html'
	})

	.when('/about', {
		templateUrl: '/templates/home/controllers/about.html'
	})

	.otherwise({ redirectTo: '/' });
}

module.exports = Router;