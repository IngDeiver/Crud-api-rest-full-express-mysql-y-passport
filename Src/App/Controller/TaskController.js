const Crud = require('../Controller/CrudController')

const CreateTask =  (req, res, next )=> {
    Crud.create(res, next, 'tasks', req.body)
}

const Select =  (req, res, next) => {
    Crud.select(res, next, 'tasks', ['title', 'description'])
}

const Update =  (req, res, next) => {
     Crud.update(res, next, 'tasks', req.params.id, req.body)
}

const FindById = (req, res, next) => {
    Crud.findById(res, next, 'tasks', req.params.id)
}

const Delete =  (req, res , next) => {
    Crud.remove(res, next, 'tasks', req.params.id)
}
 module.exports = {
     CreateTask,
     Select,
     Update,
     FindById,
     Delete
 }