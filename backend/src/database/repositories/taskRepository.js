const { Task } = require("../models");

exports.findById = async (TaskId) => {
  const task = await Task.findByPk(TaskId);
  return task;
};

exports.findAll = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

exports.create = async (taskData) => {
  const task = await Task.create(taskData);
  return task;
};

exports.update = async (taskId, taskData) => {
  await Task.update(
    { ...taskData },
    {
      where: {
        id: taskId,
      },
    }
  );
};

exports.delete = async (taskId) => {
  await Task.destroy({
    where: {
      id: taskId,
    },
  });
};
