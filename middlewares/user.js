const User = require('../models/User')

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user)
            return res.status(404).json({
                error: 'User not found'
            })
        req.profil = user
        next()
    })
}