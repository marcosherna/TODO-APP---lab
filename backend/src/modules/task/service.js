const taskRepository = require("../../database/repositories/taskRepository");

exports.getById = async (taskId) => {
  const task = await taskRepository.findById(taskId);
  return task;
};

exports.getAll = async () => {
  const task = await taskRepository.findAll();
  return task;
};

exports.store = async (taskData) => {
  const task = await taskRepository.create(taskData);
  return task;
};

exports.update = async (taskId, taskData) => {
  await taskRepository.update(taskId, taskData);
  const task = await taskRepository.findById(taskId);
  return task;
};

exports.delete = async (taskId) => {
  await taskRepository.delete(taskId);
};
