var logs= require('./usuarios') ;
var mongoUtil = require( './../db/coneccion' );
var db = mongoUtil.getDb();
var ObjectId = require('mongodb').ObjectID;

module.exports = 
{

    crear: function(req, res, next)
    {
         let rutas = db.collection('rutas');
        let ruta =
        {
            tipoVehiculo : req.body.tipoVehiculo ,
            placas : req.body.placas,
            SOAT : req.body.SOAT,
        }; 

         rutas.findOne(
             {'placas': ruta.placas },
             (err,result) =>
             {
                    if(result == undefined)
                    {
                        rutas.insert(ruta, (err,result)=>
                        {   
                            logs.crearLogs("se creo una ruta con placa "+req.body.placas,req.ip,req.user.username) ;  
                            res.json(result);
                        });
                       
                    }
                    else
                    {
                        res.json("La ruta ya existe");
                    }
    
             }); 
       
       
    },

    modificar: function(req, res, next)
    {

       
        let rutas = db.collection('rutas');

        rutas.update({'placas': req.body.placas},
            {$set:  { 'tipoVehiculo':   req.body.tipoVehiculo,
                      'SOAT': req.body.SOAT 
                    }},
            (err,result) =>
            {
                if(err)
                {
                    res.json("No se pudo actualizar el conductor");
                }
                else
                {
                    logs.crearLogs("se modifico una ruta con placa "+req.body.placas,req.ip,req.user.username) ;
                    res.json(result);
                }
                
            });
         
    },
    eliminar: function(req, res, next)
    {
   
       
        let rutas = db.collection('rutas');
        let asignaciones = db.collection('asignaciones');

        rutas.remove({'_id' : ObjectId(req.params.id)})
        .then( result =>
        {
            return asignaciones.remove({'rutaID': req.params.id});
        })
        .then (result => 
        {
            logs.crearLogs("se elimino una ruta ",req.ip,req.user.username) ;
                   
            res.json(result);
        })
        .catch( err =>
        {
            res.json("No se pudo eliminar");
        });
       
    }, 

    obtenerTodos: function(req, res, next)
    {
        let rutas = db.collection('rutas');

        rutas.find({}).toArray(
            (err,result) =>
            {
                res.json(result);
            });
       
       
    },
    obtenerUno: function(req, res, next)
    {
        let rutas = db.collection('rutas');

        rutas.findOne(
            {'placas': req.params.id },
            (err,result) =>
            {
                   if(result == undefined)
                   {   
                           res.json("No existe una ruta con esas placas");
                   }
                   else
                   {
                       res.json(result);
                   }
   
            });
       
       
    },



    
}