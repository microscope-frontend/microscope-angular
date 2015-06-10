'use strict';

// Router class
function Router($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: '/components/home/controllers/home.html'
	})

	.when('/welcome', {
		templateUrl: '/components/home/controllers/welcome.html'
	})

	.otherwise({ redirectTo: '/' });
}

module.exports = Router;