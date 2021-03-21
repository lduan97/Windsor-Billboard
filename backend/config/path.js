'use strict'

const path = require('path');

module.exports = {
    "config": {
        'common': path.join(global._appRoot + "/config/common"),
        'server': path.join(global._appRoot + "/config/server"),
        'path': path.join(global._appRoot + "/config/path")
    },
    "db_con": path.join(global._appRoot + "/db/db"),
    "db_q": path.join(global._appRoot + "/db/query"),
    'validation': path.join(global._appRoot + "/api/routes/validations"),
    "controllers": {
        "user": path.join(global._appRoot + "/api/controllers/user"),
        "vehicle": path.join(global._appRoot + "/api/controllers/vehicle")
    },
    'middleware': {
        'auth': path.join(global._appRoot + "/api/middleware/auth")
    },
    'helpers': {
        'common': path.join(global._appRoot + "/api/helpers/common")
    },
    'lib': {
        'mail': path.join(global._appRoot + "/api/lib/mail")
    },
    'services': {
        'user': path.join(global._appRoot + "/api/services/user")
    },
    'util': {
        'http': path.join(global._appRoot + "/api/util/httpCodes"),
        'logger': path.join(global._appRoot + "/api/util/logger"),
        'rest': path.join(global._appRoot + "/api/util/rest"),
        'messages': path.join(global._appRoot + "/api/util/messages"),
    },
    "routes": path.join(global._appRoot + "/api/routes/api")
};