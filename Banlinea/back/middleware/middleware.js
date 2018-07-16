
module.exports=
    {

    
        isLogged:function(req,res,next)
        {
            if(req.isAuthenticated())
            {
                next();
            }
    
            else 
            {
                res.json("no ha iniciado sesion aun");
            }
        }
    

    }