var express = require('express');
var controladores= require('.././controladores');
var router = express.Router();
var passport = require('passport');
var middleware = require('../middleware/middleware');

router.get('/conductor',middleware.isLogged,controladores.conductor.obtenerTodos);
router.get('/conductor/:tipo/:id',middleware.isLogged,controladores.conductor.obtenerUno);
router.delete('/conductor/:id',middleware.isLogged,controladores.conductor.eliminar);
router.put('/conductor',middleware.isLogged,controladores.conductor.modificar);
router.post('/conductor',middleware.isLogged,controladores.conductor.crear);

router.get('/ruta',middleware.isLogged,controladores.ruta.obtenerTodos);
router.get('/ruta/:id',middleware.isLogged,controladores.ruta.obtenerUno);
router.delete('/ruta/:id',middleware.isLogged,controladores.ruta.eliminar);
router.put('/ruta',middleware.isLogged,controladores.ruta.modificar);   
router.post('/ruta',middleware.isLogged,controladores.ruta.crear);

router.post('/asignar',middleware.isLogged,controladores.asignacion.asignar);
router.post('/desasignar',middleware.isLogged,controladores.asignacion.desasignar);
router.get('/asignacion',middleware.isLogged,controladores.asignacion.obtenerTodos);


router.get('/success',controladores.autenticacion.success);
router.get('/fail',controladores.autenticacion.fail);
router.get('/cerrar',middleware.isLogged,controladores.autenticacion.cerrar);

router.get('/obtenerLogs',middleware.isLogged,controladores.usuarios.obtenerLogs);


router.post('/log',passport.authenticate('local',{  successRedirect: '/api/success', failureRedirect:'/api/fail',}));  

module.exports = router ; 