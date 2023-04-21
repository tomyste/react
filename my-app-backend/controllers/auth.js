const {response} = require('express')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const User = require('../models/User');
const { generarJWT } = require('../helpers/jwt')

const createUser = async(req, res = response) => {

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        
        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            })
        }

        user = new User( req.body );

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt )
        await user.save();

        //Generar JWT
        const token = await generarJWT(user.id, user.userName)
    
        res.status(201).json({
            ok: true,
            msg: 'newUser is created',
            uid: user.id,
            name: user.userName,
            following: user.following,
            followers: user.followers,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

}

const loginUser = async(req, res = response) => {

    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });

        if ( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario y contraseña no son correctos'
            })
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, user.password)

        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'Pasword incorrecto'
            })
        }

        //Generar JWT
        const token = await generarJWT(user.id, user.userName);



        res.status(200).json({
            ok: true,
            msg: 'Login de usuario',
            uid: user.id,
            userName: user.userName,
            following: user.following,
            followers: user.followers,
            token
        })

        

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

    

}

const renewToken = async(req, res = response) => {

    const uid = req.uid;
    const name = req.name

    // Generando un nuevo Token

    const token = await generarJWT(uid, name);


    res.json({
        ok: true,
        uid,
        name,
        token
    })

}



module.exports = {
    createUser,
    loginUser,
    renewToken
};