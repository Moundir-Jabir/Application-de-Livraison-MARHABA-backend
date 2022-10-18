const express = require('express')
const router = express.Router()
const { userSignupValidator } = require('../middlewares/userValidator')
const { userByToken } = require('../middlewares/user')
const path = require("path")
const { signup, signin, signout, validateMail, forgetpassword, resetpassword } = require(path.join(process.cwd(), "/Controllers", "/authController.js"))

router.post('/register', userSignupValidator, signup)
router.post('/login', signin)
router.get('/logout', signout)
router.get('/emailVerification/:token', validateMail)
router.post('/forgetpassword', forgetpassword)
router.post('/resetpassword/:token', resetpassword)

router.param('token', userByToken)

module.exports = router