const { Task } = require("../models");

exports.create = async (taskData) => {
  const task = await Task.create(taskData);
  return task;
};
