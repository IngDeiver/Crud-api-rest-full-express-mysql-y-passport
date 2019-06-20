const TaskController = require('../Controller/TaskController')
const express = require('express')
const router = express.Router()

router.post('/create', TaskController.CreateTask)
router.get('/select', TaskController.Select)
router.put('/update/:id', TaskController.Update)
router.get('/find/:id', TaskController.FindById),
router.delete('/delete/:id', TaskController.Delete)

module.exports = router