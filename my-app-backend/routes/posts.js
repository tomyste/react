const { Router } = require('express');
const { getPosts, newPost, deletePost } = require('../controllers/post');
const { check } = require('express-validator')
const router = Router();


/* Rutas correspondientes a los posteos, acciones de Crear, Obtener y Eliminar */


const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');

// Todas las rutas deben comprobar que el token estè activo
router.use( validarJWT );

// Obtenemos los posteos para el feed 
router.get('/', getPosts)

// Creamos un nuevo post
router.post('/new',
[
check('txt', 'Debe contener al menos una letra').not().isEmpty().trim(),
validarCampos
]
, newPost)

// Borramos un posteo
router.delete('/:id', deletePost)



module.exports = router