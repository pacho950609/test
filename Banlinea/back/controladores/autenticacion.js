module.exports = 
{
    success: function(req, res, next)
    {
        if(req.isAuthenticated())
        {
            res.json(
                {
                    isAuthenticated: true,
                    username: req.user.username
                });
        }

        res.json(
            {
                isAuthenticated: false
            });
       
    },

    fail: function(req, res, next)
    {
        res.json("no logeado");  
    },

    cerrar: function(req, res, next)
    {
        req.session.destroy(function (err) 
        {
            res.json("cerrado");
        });  
    },


}