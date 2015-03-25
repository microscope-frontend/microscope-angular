'use strict';

// WelcomeCtrl class
function WelcomeCtrl () {
	this.firstname = "";
	this.lastname = "";
}

WelcomeCtrl.prototype.welcome = function() {
	alert('welcome ' + this.firstname + ' ' + this.lastname + ' !!!');
};


module.exports = WelcomeCtrl;