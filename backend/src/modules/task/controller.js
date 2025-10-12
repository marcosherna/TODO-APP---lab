const taskService = require("./service");

exports.getById = async (req, res) => {
  const { id: taskI } = req.params;
  const task = await taskService.getById(taskI);
  res.status(200).json(task.toJSON());
};

exports.getAll = async (req, res) => {
  let tasks = await taskService.getAll();
  tasks.map((task) => task.toJSON());
  res.status(200).json(tasks);
};

exports.create = async (req, res) => {
  const { title, description } = req.body;
  const task = await taskService.store({ title, description });
  res.status(201).json(task.toJSON());
};

exports.update = async (req, res) => {
  const { id: taskId } = req.params;
  const { title, description, completed } = req.body;
  const task = await taskService.update(taskId, {
    title,
    description,
    completed,
  });
  res.status(200).json(task.toJSON());
};

exports.delete = async (req, res) => {
  const { id: taskId } = req.params;
  await taskService.delete(taskId);
  res.status(204).end();
};
