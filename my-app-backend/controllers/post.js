const { response } = require('express');
const Post = require('../models/Post');
const User = require('../models/User');

const newPost = async( req, res= response ) => {

    const post = new Post( req.body )

    try {

        post.user = req.uid;
        post.date = Date();

        const postSaved = await post.save()

        res.json({
            ok: true,
            postSaved
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Admin'
        })
    }


}


// * Aqui obtenemos los posteos para mostrar en el "feed".


const getPosts = async ( req, res = response ) => {

    const userActive = await User.findById(req.uid);
    //Agrego el usuario activo al arreglos de following, para de esta forma, poder filtrar solo los posteos de mis seguidos y los propios                               
    userActive.following.push(req.uid);

    const posts = await Post.find(
        {
            user: userActive.following
        }
    )
    .populate('user', 'userName _id').sort([['date', 1]]);
    // Populate lo que hace es relacionar al posteo con el creador (user).

    res.json({
        user: req.name,
        ok: true,
        posts
    })
}



const deletePost = async (req, res = response ) => {

    const postId = req.params.id
    const uid = req.uid


    try {
        const post = await Post.findById(postId)

        if ( !post ) {
            return res.status(404).json({
                ok: false,
                msg: 'El Posteo no existe'
            })
        }

        if ( post.user.toString() !== uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegios para eliminar este poste'
            })
        }

        await Post.findByIdAndDelete( postId )

        res.json({
            ok: true,
            msg: 'Posteo eliminado',
            post
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}


module.exports = {
     newPost,
     getPosts,
     deletePost
}