microscope-angular
==================

AngularJS (CommonJS/ Browserify) project template with browserify and grunt build system.

![microscopejs](http://microscopejs.com/images/mcsp_bg.png)

Requirements
------------

* node
* npm
* grunt-cli

Node.js installation
--------------------

#### Install on OSX

Using homebrew:

	brew install node

#### Install on Linux (Ubuntu/Mint)

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

#### Install on Windows

[Download Node.js MSI](http://nodejs.org/download/)

Installation
------------

#### install grunt-cli (sudo on linux/OSX) :

	npm install grunt-cli

#### install dependencies (sudo on linux/OSX) :

	npm install

Commands
--------

#### start (run grunt serve):

	npm start

#### test (run grunt test):

	npm test

#### build:

	grunt build

* clean build directory.
* copy assets & templates in build directory.
* compile scripts source files to bundle.

#### release:

	grunt release
	
* validate source code (jsHint).
* clean build directory.
* copy assets & templates in build directory.
* compile scripts source files to bundle.
* uglify bundle.

#### test:

	grunt test
	
* validate source code (jsHint).

#### docs:

	grunt docs
	
* generate annoted code documentation (docco).
* run local server with generated 'docs/' directory as root.
* open default browser.

#### serve:

	grunt serve
	
* clean build directory.
* copy assets & templates in build directory.
* compile scripts source files to bundle.
* run local server with generated 'build/' directory as root.
* open default browser.
* Watch for changes in source files (scripts & assets).