/*
 * nopache-cli
 *
 * Copyright (c) 2015 Trevor Hall, contributors
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

var nopt = require('nopt');

exports.known = {
    help: Boolean,
    version: Boolean,
    config: path,
    port: Number,
    base: path
};

exports.aliases = {
    h: '--help',
    v: '--version',
    p: '--port',
    b: '--base'
};

// Parse them and return an options object.
Object.defineProperty(exports, 'options', {
    get: function() {
        return nopt(exports.known, exports.aliases, process.argv, 2);
    }
});
