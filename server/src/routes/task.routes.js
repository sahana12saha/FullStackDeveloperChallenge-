const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask, getAllTasks } = require('../controllers/task.controller');

router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/', getAllTasks);

module.exports = router;
