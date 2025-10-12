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
  // TODO : implement method whit repository task
  return {
    id: taskId,
    ...taskData,
    created_at: new Date().toLocaleString(),
    updated_at: new Date().toLocaleString(),
  };
};

const deleteTask = async (taskId) => {
  // TODO : implement method whit repository task
  return;
};

module.exports = {
  getByTaskId,
  getAllTask,
  storeTask,
  updateTask,
  deleteTask,
};
