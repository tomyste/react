const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { newFollow, unFollow} = require('../controllers/follow');
const router = Router();

// Aplicamos la validacion del JWT en todas las acciones 

router.use( validarJWT )


// Ruta para agregar un nuevo follow
router.post('/follow/:id', newFollow)

// Ruta para eliminar un follow
router.post('/unFollow/:id', unFollow)



module.exports = router