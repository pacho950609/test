
const logs= require('./usuarios') ;
const mongoUtil = require( './../db/coneccion' );
const db = mongoUtil.getDb();
var ObjectId = require('mongodb').ObjectID;

module.exports = 
{

     crear: function(req, res, next)
    {
        let conductores = db.collection('conductores')
        let conductor =
        {
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            tipoDocumento : req.body.tipoDocumento,
            numeroDocumento : req.body.numeroDocumento,
        }; 

         conductores.findOne(
             {'tipoDocumento': conductor.tipoDocumento, 'numeroDocumento':conductor.numeroDocumento },
             (err,result) =>
             {
                    if(result == undefined)
                    {
                        conductores.insert(conductor, (err,result)=>
                        {     
                            logs.crearLogs("se creo un conductor con el documento "+req.body.numeroDocumento,req.ip,req.user.username) ;
                            res.json(result);
                        });
                       
                    }
                    else
                    {
                        res.json("El usuario ya existe");
                    }
    
             }); 
    },

    modificar: function(req, res, next)
    {
         let conductores = db.collection('conductores');

        conductores.update({'tipoDocumento': req.body.tipoDocumento, 'numeroDocumento':req.body.numeroDocumento },
            {$set:  { 'nombre':   req.body.nombre,
                      'apellido': req.body.apellido 
                    }},
            (err,result) =>
            {
                if(err)
                {
                    res.json("No se pudo actualizar el conductor");
                }
                else
                {
                    logs.crearLogs("se modifico el conductor con el documento "+req.body.numeroDocumento,req.ip,req.user.username) ;
                    res.json(result);
                }
                
            });  
    },
    eliminar: function(req, res, next)
    {
       
        let conductores = db.collection('conductores');
        let asignaciones = db.collection('asignaciones');

        conductores.remove({'_id' : ObjectId(req.params.id)})
        .then( result =>
        {
            return asignaciones.remove({'conductorID': req.params.id});
        })
        .then (result => 
        {
            logs.crearLogs("se elimino un conductor",req.ip,req.user.username) ;
            res.json(result);
        })
        .catch( err =>
        {
            res.json("No se pudo eliminar");
        });
    },

    obtenerTodos: function(req, res, next)
    {
        
        let conductores = db.collection('conductores');

        conductores.find({}).toArray(
            (err,result) =>
            {
                res.json(result);
            });
       
    },
    obtenerUno: function(req, res, next)
    {
        let conductores = db.collection('conductores');

        conductores.findOne(
            {'tipoDocumento': req.params.tipo, 'numeroDocumento':req.params.id },
            (err,result) =>
            {
                   if(result == undefined)
                   {   
                        res.json("No existe un conductor con esa identifiacion");
                   }
                   else
                   {
                       res.json(result);
                   }
   
            });
    },




}