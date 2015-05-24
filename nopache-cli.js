var NopacheServer = require('nopache').nopache;

rootDir = process.argv[2];
port = process.argv[3];

var server = new NopacheServer(rootDir, port);

server.listen();
