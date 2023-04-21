const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { route } = require('./follow');
const { getUsers } = require('../controllers/users');
const router = Router();

router.use( validarJWT );

router.get('/users', getUsers);

module.exports = router