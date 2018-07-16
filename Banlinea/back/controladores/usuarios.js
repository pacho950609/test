var mongoUtil = require( './../db/coneccion' );
var db = mongoUtil.getDb();

module.exports = 
{
    obtenerLogs: function(req, res, next)
    {
        let logs = db.collection('registros');
        logs.find({'idUsuario': req.user.username}).toArray(
            (err,result) =>
            {
                res.json(result);
            });
       
    },
    crearLogs: function(texto,ips,username)
    {
        let logs = db.collection('registros');
        let datetime = new Date();
        let log =
        {
            idUsuario : username,
            ip : ips,
            fecha : datetime,
            texto : texto,
        }; 

        logs.insert(log, (err,result)=>
        {     
               
        });
                       
                   
    },

}