const { Router } = require("express");

const taskController = require("./controller");
const { validateRequest } = require("../../middlewares/validateRequest");
const taskRequest = require("./request");

const PATH = "/task";
const router = Router();

router.get(
  `${PATH}/:id`,
  taskRequest.idValidator,
  validateRequest,
  taskController.getById
);
router.get(`${PATH}/`, taskController.getAll);
router.post(
  `${PATH}/`,
  taskRequest.createValidator,
  validateRequest,
  taskController.create
);
router.put(
  `${PATH}/:id`,
  taskRequest.updateValidator,
  validateRequest,
  taskController.update
);
router.delete(
  `${PATH}/:id`,
  taskRequest.idValidator,
  validateRequest,
  taskController.delete
);

module.exports = { router };
