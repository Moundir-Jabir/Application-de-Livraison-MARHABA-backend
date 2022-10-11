const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if (err)
            return res.status(400).send(err)
        user.hashed_password = undefined
        user.salt = undefined
        return res.send(user)
    })
}

exports.signin = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user)
            return res.status(400).json({
                erreur: 'Not found user with this email'
            })
        if (!user.authenticated(password))
            return res.status(401).json({
                erreur: 'Incorect password'
            })
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET)
        res.cookie('token', token, { expire: new Date() + 8062000 })
        user.hashed_password = undefined
        user.salt = undefined
        return res.json({ token, user })
    })
}
exports.signout = (req, res) => {
    res.clearCookie('token')
    res.json({ message: 'User Signout' })
}