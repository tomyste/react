const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async( req, res = response ) => {
    
    const { email, password } = req.body; 
    
    try {
        // Verificamos que el email no exista previamente en la BD
        let usuario = await Usuario.findOne({ email });
        // Si encuentra un usuario con el mismo email, usuario = usuario y sino usuario == null
        if( usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            });
        }

        // Si es null, creamos un nuevo usuario
        usuario = new Usuario( req.body );

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );


        await usuario.save();

        // Generar nuestro JSON WEB TOKEN
        const token = await generarJWT( usuario.id, usuario.name );
        
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        })
    }


}

const loginUsuario = async( req, res = response ) => {
    
    const { email, password } = req.body;


    try {
        
        const usuario = await Usuario.findOne({ email });
        if( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password);

        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'Password Incorrecto'
            });
        }

        // Generamos nuestro JSON WEB TOKEN
        const token = await generarJWT( usuario.id, usuario.name );
        

        res.status(200).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        })
    }

}

const revalidarToken = async( req, res = response ) => {
    
    const { uid, name } = req;
    console.log(uid)    

    // Generamos un nuevo JWT y retornarlo en esta peticiòn
    const token = await generarJWT( uid, name );

    res.json({
        ok: true,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}