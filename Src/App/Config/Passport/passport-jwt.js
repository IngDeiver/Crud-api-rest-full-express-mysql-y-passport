const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const {secret} = require('../JWT')
const pool = require('../Database/Connection')

const opctions = {
    secretOrKey:secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
}

passport.use(new JwtStrategy(opctions, (jwt_payload, done) => {
    pool.query('SELECT username FROM users WHERE username = ? and password = ?', [jwt_payload.user.username, jwt_payload.user.password], (err, results, fields)=>{
        console.log(results)
        if(err) 
            return done(err)
        if (results.length >0){
             console.log(results)
             let user = results[0]
             return done(null, user)
        }else{
             return  done(null, false)
        }
    })
}))