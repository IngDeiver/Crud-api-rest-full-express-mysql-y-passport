const express = require('express')
const morgan = require('morgan')

// initialization
app =  express()

//settings
app.set('port', process.env.PORT  || 3000)

//middlewares
app.use(express.json({type:'application/json'}))
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))



 module.exports = app;