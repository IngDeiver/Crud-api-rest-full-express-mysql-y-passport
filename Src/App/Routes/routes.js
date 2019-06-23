const express = require('express')
const router =  express.Router()
const passport = require('passport')

router.use('/task', passport.authenticate('jwt', {session:false}), require('./task.js'))
router.use('/user', require('./user.js'))

module.exports = router