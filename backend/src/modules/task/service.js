const taskRepository = require("../../database/repositories/taskRepository");
const { NotFound } = require("../../errors");

exports.getById = async (taskId) => {
  const task = await taskRepository.findById(taskId);
  if (!task)
    throw new NotFound("The task does not found", [
      {
        type: "field",
        msg: "the id does not match any record",
        location: "params",
        property: "id",
      },
    ]);
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
  const isExist = await taskRepository.exists(taskId);
  if (!isExist)
    throw new NotFound("The task does not found", [
      {
        type: "field",
        msg: "the id does not match any record",
        location: "params",
        property: "id",
      },
    ]);

  await taskRepository.update(taskId, taskData);

  const task = await taskRepository.findById(taskId);
  return task;
};

exports.delete = async (taskId) => {
  const isExist = await taskRepository.exists(taskId);
  if (!isExist)
    throw new NotFound("The task does not found", [
      {
        type: "field",
        msg: "the id does not match any record",
        location: "params",
        property: "id",
      },
    ]);

  await taskRepository.delete(taskId);
};
