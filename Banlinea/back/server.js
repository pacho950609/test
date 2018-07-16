

var mongoUtil = require( './db/coneccion' );

mongoUtil.connectToServer( ( err ) =>
    {

        var express = require("express");
        var tasks = require("./routes/servicios");
        var bodyParser = require("body-parser");
        var port = 8080 ;
        var app  = express() ; 
        var passport= require('passport') ;
        var session = require('express-session'); 
        require('./passport/passport')(passport);

        app.use(session({
            secret : 'secret',
             resave:false ,
             saveUninitialized : false
        }));
        
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use('/api', tasks);
        app.listen(port, () => { console.log('Server started on port'+port);} );
    });

