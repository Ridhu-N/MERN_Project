const TaskModel = require("../models/taskModel");

module.exports.getTask = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};

module.exports.saveTask = (req, res) => {
  const { task } = req.body;

  TaskModel.create(task)
    .then((data) => {
      console.log("Saved");
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send("Not saved");
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;
  console.log(id);
  TaskModel.findByIdAndDelete(id)
    .then((data) => {
      console.log("Deleted");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send("Not Deleted");
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  // const { task } = req.body;
  // console.log(task)
  const { title, description } = req.body;
  console.log(title, description);
  TaskModel.findByIdAndUpdate(id, { title, description }, { new: true })
    .then((data) => {
      console.log("Updated");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error updating task.");
    });
};
