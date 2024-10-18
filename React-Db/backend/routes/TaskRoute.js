const { Router } = require("express");
const router=Router();
const {getTask,saveTask,updateTask,deleteTask} = require("../controllers/TaskController")
router.get('/get',getTask);
router.post('/save',saveTask);
router.put("/update/:id",updateTask);
router.delete("/delete/:id",deleteTask)
module.exports=router;