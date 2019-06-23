const crud = require('../Controller/CrudController')
const becrypt = require('bcrypt-nodejs')
const pool = require('../Config/Database/Connection')
const jwt = require('jsonwebtoken')
const {secret} = require('../Config/JWT.js')

const CreateUser = (req, res, next ) => {
        req.body.password = endcodePassword(req.body.password)
        crud.create(res, next, 'users', req.body)
}


const endcodePassword = (password) => {
        return becrypt.hashSync(password)
}

const comparePassword = (password, hash) => {
        return becrypt.compareSync(password, hash)
}


const authenticated =  (req, res, next, columns, table, fieldfind, valuefind ) => {
    
        pool.query('SELECT ?? FROM ?? WHERE ?? = ?', [columns, table, fieldfind, valuefind], (err, results, fields)=>{
           if(err) 
               return next(err)
           if (results.length >0){
                let user = results[0]
                if (!comparePassword(req.body.password, user.password))
                        res.status(403).json({'message':'Cretentials error'})
                createToken(user, res )
           }else{
                res.status(404).json({'message':'User not found'})
           }
       })
}

const createToken =   (user, res) => {
          jwt.sign({user}, secret, {expiresIn:'365 days'}, (err, token) => {
            if (err) throw err;
            res.json({
                  token: 'JWT ' + token ,
                  user
            })
        })
    }
    

module.exports = {
        CreateUser,
        authenticated
}