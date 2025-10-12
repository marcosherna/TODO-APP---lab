const taskService = require("./service");

exports.getById = async (req, res) => {
  const { id: taskI } = req.params;
  const task = await taskService.getById(taskI);
  res.status(200).json(task);
};

exports.getAll = async (req, res) => {
  const tasks = await taskService.getAll();
  res.status(200).json(tasks);
};

exports.create = async (req, res) => {
  const { title, description } = req.body;
  const task = await taskService.store({ title, description });
  res.status(201).json(task);
};

exports.update = async (req, res) => {
  const { id: taskId } = req.params;
  const { title, description, completed } = req.body;
  const task = await taskService.update(taskId, {
    title,
    description,
    completed,
  });
  res.status(200).json(task);
};

exports.delete = async (req, res) => {
  const { id: taskId } = req.params;
  await taskService.delete(taskId);
  res.status(204).end();
};
