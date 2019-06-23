const express = require('express')
const morgan = require('morgan')
const passport  = require('passport')
const session = require('express-session')
const {secret} = require('../JWT')
const cors = require('cors')

// initialization
app =  express()

//settings
app.set('port', process.env.PORT  || 3000)

//middlewares
app.use(express.json({type:'application/json'}))
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(session({secret:secret, resave:false, saveUninitialized: false}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
require('../Passport/passport-jwt') // load strategy 


 module.exports = app;