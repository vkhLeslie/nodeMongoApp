/**
 * @author chenxw
 * @description 环境配置文件
 * @version
 * @update 2017-10-07
 */

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'nodeMongoApp'
        },
        port: 3000,
        db: 'mongodb://localhost/nodetest'
    },

    test: {
        root: rootPath,
        app: {
            name: 'nodeMongoApp'
        },
        port: 3000,
        db: 'mongodb://localhost/nodetest'
    },

    production: {
        root: rootPath,
        app: {
            name: 'nodeMongoApp'
        },
        port: 3000,
        db: 'mongodb://localhost/nodetest'
    }
};

module.exports = config[env];