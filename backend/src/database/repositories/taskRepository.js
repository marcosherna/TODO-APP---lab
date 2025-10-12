const { Task } = require("../models");

exports.findAll = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

exports.create = async (taskData) => {
  const task = await Task.create(taskData);
  return task;
};
