var LocalStrategy= require('passport-local').Strategy;
var mongoUtil = require( './../db/coneccion' );
var db = mongoUtil.getDb();


module.exports = (passport) =>
{

    passport.serializeUser(function(user,done){ done(null,user);});
        
    passport.deserializeUser(function(obj,done){ done(null,obj);});


    passport.use(new LocalStrategy({
        
        passReqToCallback: true 
        
        }, (req , username, password, done) =>
        {   
                db.collection('usuarios').findOne({'username': username},
                    (err,result) =>
                    {
                        if(result!= undefined && result.password==password)
                        {
                            let user =
                            {
                                'username' : username,
                            }
    
                            return done(null,user);
                        }

                        return done(null,false);
                    }

                );                             
        }));
        


};