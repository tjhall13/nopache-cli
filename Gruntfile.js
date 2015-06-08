/*
 * nopache-cli
 *
 * Copyright (c) 2015 Trevor Hall, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            options: {
                node: true
            },
            all: [
                'Gruntfile.js',
                'lib/**/*.js',
                'bin/*'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};
