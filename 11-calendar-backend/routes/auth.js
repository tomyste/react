/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const express = require('express');
const { check } = require('express-validator')
const router = express.Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controlers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post( '/new',
            [
                check('name', 'El nombre es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password es obligatorio y debe ser mayor que 6').isLength({ min: 6, max: 20 }),
                validarCampos
            ], 
            crearUsuario
        )

router.post( '/',
[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({ min: 6 }),
    validarCampos

], loginUsuario )


router.get( '/renew', validarJWT ,revalidarToken ) 


module.exports = router;