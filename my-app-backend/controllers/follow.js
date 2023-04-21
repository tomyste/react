const { response } = require('express');
const User = require('../models/User');

// * Puedo repetir esta logica para los favoritos de cada post

const newFollow = async (req, res = response ) => {
    const user = await User.findById(req.uid);
    const otherUser = await User.findById(req.params.id);
    
    try {
        
        
        if( user.following.indexOf(otherUser._id) === -1){
            user.following.push(otherUser._id),
            otherUser.followers.push(user._id),
            await user.save(),
            await otherUser.save()

            return res.json({
                ok: true,
                msg: 'Se agrego el nuevo seguidor',
                newFollow: otherUser.userName
            })
        } else {
            return res.json({
                ok: false,
                msg: 'Ya sigue a este usuario'
            })
        }

        

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }

}

const unFollow = async ( req , res = response ) => {
    
    const user = await User.findById(req.uid);
    const otherUser = await User.findById(req.params.id);
    
    try {
        
        
        if( user.following.indexOf(otherUser._id) !== -1){
            user.following.pull(otherUser._id),
            otherUser.followers.pull(user._id),
            await user.save(),
            await otherUser.save()

            return res.json({
                ok: true,
                msg: 'Se elimino a',
                name:  otherUser.userName               
            })

        } else {
            return res.json({
                ok: false,
                msg: 'No sigue a este usuario'
            })
        }        

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }

}

// ! Problablemente este metodo lo deberia cambiar de lugar y crear un controlador y rutas propias, pero por el momento queda aca por motivos de pruebas.




module.exports = {
    newFollow,
    unFollow,
  
}