var logs= require('./usuarios') ;
var mongoUtil = require( './../db/coneccion' );
var db = mongoUtil.getDb();
var ObjectId = require('mongodb').ObjectID;
var mongo = require('mongodb');

module.exports = 
{
    asignar: function(req, res, next)
    {
        
        let conductores = db.collection('conductores');
        let rutas = db.collection('rutas');
        let asignaciones = db.collection('asignaciones');
        let asignacion =
        {
            'conductorID' : req.body.conductorID ,
            'rutaID' : req.body.rutaID,
            'x1' : req.body.x1 ,
            'y1' : req.body.y1,
            'x2' : req.body.x2,
            'y2' : req.body.y2,
            'pasajero' : req.body.pasajero,
            'empresa' : req.body.empresa,
            'estado' : 'asignado'   
        }
        let cond1 = mongo.ObjectID.isValid(req.body.conductorID);
        let cond2 = mongo.ObjectID.isValid(req.body.rutaID);

        if( cond1 && cond2)
        {
            conductores.findOne({'_id' : ObjectId(req.body.conductorID)})
                .then(result =>
                {
                    
                    if(result == undefined)
                    {
                        throw "No existe el conductor";  
                    }
                    else
                    {
                    return rutas.findOne({'_id' : ObjectId(req.body.rutaID)});
                    }
                })
                .then(result =>
                {
                    
                    if(result == undefined)
                    {
                        throw "No existe la ruta";  
                    }
                    else
                    {
                        return  asignaciones.findOne({'conductorID': req.body.conductorID , 
                        'estado' : 'asignado' });
                    }
                })
                .then(result =>
                {
                    if(result != undefined)
                    {
                        throw "El conductor ya esta asignado";  
                    }
                    else
                    {
                        return asignaciones.findOne({'rutaID': req.body.rutaID , 
                        'estado' : 'asignado' })
                    }
                })
                .then(result =>
                {
                    if(result != undefined)
                    {
                        throw "La ruta ya esta asignado";  
                    }
                    else
                    {
                        return asignaciones.insert(asignacion)
                    }
                })
                .then(result =>
                {
                    logs.crearLogs("se asigno una ruta ",req.ip,req.user.username) ;
              
                    res.json(result);
                })
                .catch(err=>
                {
                    res.json(err);
                });
        }

        else
        {
            res.json("IDs no validos (cedula o placa)");
        }
       
       
    },

    desasignar: function(req, res, next)
    {
        
        let asignaciones = db.collection('asignaciones');
        let cond = mongo.ObjectID.isValid(req.body._id);

        if(cond)
        {
            asignaciones.update({'_id' : ObjectId(req.body._id) },
            {$set:  {'estado': 'desasignado'}},
            (err,result) =>
            {
                if(err)
                {
                    res.json("No se pudo desaignar");
                }
                else
                {
                    logs.crearLogs("se desasigno una ruta ",req.ip,req.user.username) ;
                    res.json(result);
                }
                
            }); 
        }
        else
        {
            res.json("ID no valido");
        }      
    },

    obtenerTodos: function(req, res, next)
    {
        
        let asignaciones = db.collection('asignaciones');

        asignaciones.find({}).toArray(
            (err,result) =>
            {
                res.json(result);
            });
       
    }


}