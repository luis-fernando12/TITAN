let express = require('express');
let router = express.Router();

let TaskControllers = require('../controllers/TaskControllers');

router.get('/add', TaskControllers.createTask);


router.post('/add', TaskControllers.createTaskSave);


router.post('/remove', TaskControllers.removeTask);


router.get('/edit/:id', TaskControllers.updateTask);


router.post('/edit', TaskControllers.updateTaskSave);


router.post('/updatestatus', TaskControllers.toggleTaskUpdate);


router.get('/', TaskControllers.showTasks);

module.exports = router;