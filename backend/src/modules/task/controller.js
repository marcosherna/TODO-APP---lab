const getById = async (req, res) => {
  res.status(200).json({ message: "get by id method" });
};

const getAll = async (req, res) => {
  res.status(200).json({ message: "get method" });
};

const create = async (req, res) => {
  res.status(201).json({ message: "post method" });
};

const update = async (req, res) => {
  res.status(200).json({ message: "put method" });
};

const trash = async (req, res) => {
  res.status(204).end();
};

module.exports = {
  getById,
  getAll,
  create,
  update,
  trash,
};
