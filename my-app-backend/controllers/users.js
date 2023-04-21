const { response } = require('express');
const User = require('../models/User');


const getUsers = async ( req, res = response ) => {

    
    try {
        const userActive = await User.findById(req.uid);
        userActive.following.push(req.uid);
        
        const users = await User.find(
            { 
                _id: { $nin: userActive.following } 
            }
            );
            
        return res.json({
            ok : true,
            user: req.name,
            users
        })
            
            
    } catch (error) {
        return res.status(400).json({
            ok : false,
            error
        })
    }

}

module.exports = { 
    getUsers
}