const taskRepository = require("../../database/repositories/taskRepository");

const getByTaskId = async (taskId) => {
  const task = await taskRepository.findById(taskId);
  return task;
};

const getAllTask = async () => {
  const task = await taskRepository.findAll();
  return task;
};

const storeTask = async (taskData) => {
  const task = await taskRepository.create(taskData);
  return task;
};

const updateTask = async (taskId, taskData) => {
  await taskRepository.update(taskId, taskData);
  const task = await taskRepository.findById(taskId);
  return task;
};

const deleteTask = async (taskId) => {
  await taskRepository.delete(taskId);
};

module.exports = {
  getByTaskId,
  getAllTask,
  storeTask,
  updateTask,
  deleteTask,
};
