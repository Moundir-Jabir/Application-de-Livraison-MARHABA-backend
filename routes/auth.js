const express = require('express')
const router = express.Router()
const { userSignupValidator } = require('../middlewares/userValidator')
const { userById } = require('../middlewares/user')
const { signup, signin, signout, validateMail, forgetpassword, resetpassword } = require('../controllers/authController')

router.post('/register', userSignupValidator, signup)
router.post('/login', signin)
router.get('/logout', signout)
router.get('/emailVerification/:userID', validateMail)
router.post('/forgetpassword', forgetpassword)
//router.post('/resetpassword/:token', resetpassword)

router.param('userID', userById)
//router.param('token', userByToken)

module.exports = router