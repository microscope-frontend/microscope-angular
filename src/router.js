'use strict';

// Router class
function Router($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: '/home/controllers/home/home.html'
	})

	.when('/welcome', {
		templateUrl: '/home/controllers/welcome/welcome.html'
	})

	.otherwise({ redirectTo: '/' });
}

module.exports = Router;