const {
  getAllTask,
  getByTaskId,
  storeTask,
  updateTask,
  deleteTask,
} = require("./service");

const getById = async (req, res) => {
  const { id: taskI } = req.params;
  const task = await getByTaskId(taskI);
  res.status(200).json(task);
};

const getAll = async (req, res) => {
  const tasks = await getAllTask();
  res.status(200).json(tasks);
};

const create = async (req, res) => {
  const { title, description } = req.body;
  const task = await storeTask({ title, description });
  res.status(201).json(task);
};

const update = async (req, res) => {
  const { id: taskId } = req.params;
  const { title, description, completed } = req.body;
  const task = await updateTask(taskId, { title, description, completed });
  res.status(200).json(task);
};

const trash = async (req, res) => {
  const { id: taskId } = req.params;
  await deleteTask(taskId);
  res.status(204).end();
};

module.exports = {
  getById,
  getAll,
  create,
  update,
  trash,
};
