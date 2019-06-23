const User = require('../Models/User.js')
const crud = require('../Controller/CrudController')

const create =  (req, res, next) => {
     User.CreateUser(req, res, next)
}   

const login = (req, res, next) => {
    User.authenticated(req, res, next, ['username', 'password'], 'users', 'username', req.body.username)
}

const select = (req, res, next) => {
    crud.select(res, next, 'users', ['username', 'password'])
}

module.exports = {
    create,
    login,
    select
}