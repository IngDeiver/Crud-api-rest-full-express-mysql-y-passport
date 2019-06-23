const pool = require('../Config/Database/Connection.js')

const create = async  (res, next, table, columns) => {
        await pool.query('INSERT INTO ?? SET ?',[table, columns], (err, results, fields) => {
            if(err) 
                return  next(err)   
            res.json({'message':`${table} Saved`})    
                
        })
}
const update = (res, next, table, id, columns) => {
    pool.query('UPDATE ?? SET ? WHERE  id = ?',[table, columns, id,], (err, results, fields)=> {
        if(err) 
            return next(err)
        res.json({'message':`${table} Update`})
    })
}
const remove = (res, next, table, id) => {
    pool.query('DELETE FROM ?? WHERE id = ?',[table, id], (err, results, fields) => {
        if (err) 
            return next(err)
        res.json({'message':`${table} Saved`})
    })
}
const findById =   (res, next, table, id) => {
    pool.query("SELECT * FROM ?? WHERE id = ?",[table, id], (err, results, fields) => {
        if (err)
            return next(err)
        res.json(results)
    })
}
const select =  (res, next, table, columns) => {
        pool.query('SELECT ?? FROM ??', [ columns, table], (err, results, fields)=> {
            if (err)
                return next(err)
            res.json(results)
        })    
}


module.exports = {
    create,
    update,
    remove,
    findById,
    select
}