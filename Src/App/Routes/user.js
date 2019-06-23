const express = require('express')
const router = express.Router()
const userController = require('../Controller/UserController.js')
const passport = require('passport')

router.post('/create', userController.create)
router.post('/login', userController.login)
router.use(passport.authenticate('jwt',{session:false}))// NEXT ROUTES IS SECURE
router.get('/select', userController.select)

module.exports = router