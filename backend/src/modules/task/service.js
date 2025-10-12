const getByTaskId = async (taskId) => {
  // TODO : implement method whit repository task
  return {
    id: 1,
    title: "this is test title for task",
    description: "this is a description for task",
    completed: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: new Date().toLocaleDateString(),
  };
};

const getAllTask = async () => {
  // TODO : implement method whit repository task
  return [
    {
      id: 1,
      title: "this is test title for task",
      description: "this is a description for task",
      completed: false,
      created_at: new Date().toLocaleDateString(),
      updated_at: new Date().toLocaleDateString(),
    },
  ];
};

const storeTask = async (taskData) => {
  // TODO : implement method whit repository task
  return {
    id: 2,
    ...taskData,
    completed: false,
    created_at: new Date().toLocaleString(),
  };
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
