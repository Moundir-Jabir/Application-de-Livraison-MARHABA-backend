const express = require('express')
const router = express.Router()
const { userById } = require('../middlewares/user')
const { getUser, userPhoto } = require('../controllers/userController')
const { requireSignin, isAuth } = require('../middlewares/auth')

router.get('/:userID', [requireSignin, isAuth], getUser)
router.get('/image/:userID', userPhoto)

router.param('userID', userById)

module.exports = router