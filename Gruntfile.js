"use strict";

var jshint     = require('./grunt/jshint');
var browserify = require('./grunt/browserify');
var watch      = require('./grunt/watch');
var concurrent = require('./grunt/concurrent');
var connect    = require('./grunt/connect');
var uglify     = require('./grunt/uglify');
var copy       = require('./grunt/copy');
var clean      = require('./grunt/clean');
var docco      = require('./grunt/docco');

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: jshint,
        browserify: browserify,
        watch: watch,
		concurrent: concurrent,
		connect: connect,
        uglify: uglify,
        copy: copy,
        clean: clean,
        docco: docco
    });

    // Load npm tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-docco');

    // Register task(s).
    grunt.registerTask('default', ['serve']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('docs', ['docco']);
    grunt.registerTask('build', ['clean', 'copy:assets', 'copy:templates', 'docco', 'browserify']);
    grunt.registerTask('serve', ['build', 'concurrent:debug']);
    grunt.registerTask('release', ['jshint', 'build', 'uglify']);
};