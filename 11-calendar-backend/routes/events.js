/**
 * Rutas de Eventos
 * /api/events
 * 
 */

const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt')
const { getEvents, getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controlers/events');
const { check } = require('express-validator');
const { isDate } = require('moment');
const { validarCampos } = require('../middlewares/validar-campos');

//evitamos utilizar el validarJWT en cada una de las peticiones de la siguiente manera
router.use( validarJWT )


//Obteniendo eventos
router.get('/', getEventos);

//Crear un nuevo evento
router.post(
    '/',
    [
           check('title', 'El titulo es obligatorio').not().isEmpty(),
           check('start', 'Fecha de inicio es obligatoria').isDate(),
           check('end', 'Fecha de finalizacion es obligatoria').isDate(),
           validarCampos,
           
    ],
    crearEvento
    );

// Actualizar evento
router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').isDate(),
        check('end', 'Fecha de finalizacion es obligatoria').isDate(),
        validarCampos,
        
    ],
    actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router