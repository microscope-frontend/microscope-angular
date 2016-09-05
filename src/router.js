'use strict';

// Router class
function Router($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/' });
}

module.exports = Router;