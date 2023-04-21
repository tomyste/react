
/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */


const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt')


router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener mas de 6 caracteres y menos de 15')
        .isLength({
            min: 6,
            max: 15
        })
        .matches(/\d/)
        .withMessage('must contain a number'),
        validarCampos
    ],
    loginUser );

router.post('/new',
    [ //middlewares
        check('userName', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener mas de 6 caracteres y menos de 15')
        .isLength({
            min: 6,
            max: 15
        })
        .matches(/\d/)
        .withMessage('must contain a number'),
        validarCampos
    ],
    createUser);

router.get('/renew', validarJWT, renewToken );

module.exports = router;