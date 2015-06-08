/*
 * nopache-cli
 *
 * Copyright (c) 2015, Trevor Hall contributors
 * Licensed under the MIT license.
 */

'use strict';

// Project metadata.
var pkg = require('../package.json');

// Help body.
function help() {
  [
    'Usage: nopache [options]',
    'Options:',
    '  --version -v         Display version information.',
    '  --help -h            Show this help.',
    '  --config <file>      Load <file> as a json config file for the web server.',
    '  --port -p <port>     Host web server on <port>.',
    '  --base -b <dir>      Use <dir> as base directory.',
    '',
    'To connect. Simply connect your browser to localhost:<port>'
  ].forEach(function(str) { console.log(str); });
}

// Help footer.
function error() {
  [
    'If you\'re seeing this message nopache',
    'hasn\'t been installed locally to your project. For more information about',
    'installing and configuring nopache, please see the Nopache package information.'
  ].forEach(function(str) { console.log(str); });
};

exports.info = function() {
    console.log('nopache-cli: ' + pkg.description + ' (v' + pkg.version + ')');
    console.log('');
};

// Display nopache-cli version and exit.
exports.version = function() {
    console.log('nopache-cli v' + pkg.version);
    process.exit();
};

// Show help, then exit with a message and error code.
exports.fatal = function(msg, code) {
    exports.info();
    console.log('Fatal error: ' + msg);
    console.log('');
    error();
    process.exit(code);
};

// Show help and exit.
exports.help = function() {
    help();
    process.exit();
};
