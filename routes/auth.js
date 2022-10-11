const express = require('express')
const router = express.Router()
const { userSignupValidator } = require('../middlewares/userValidator')
const { signup, signin, signout } = require('../controllers/authController')

router.post('/register', userSignupValidator, signup)
router.post('/login', signin)
router.get('/logout', signout)

module.exports = router