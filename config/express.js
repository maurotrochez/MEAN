var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methoOverride = require('method-override');

module.exports = function(){
    var app = express();

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methoOverride());

    require('../app/routes/index.server.routes.js')(app);

    return app;
};
