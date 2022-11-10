exports.getUser = (req, res) => {
    req.profil.hashed_password = undefined
    req.profil.salt = undefined
    req.profil.image = undefined
    return res.json({user: req.profil})
}

exports.userPhoto = (req, res) => {
    const { data, contentType } = req.profil.image
    if (data) {
        res.set('Content-Type', contentType)
        return res.send(data)
    }
}