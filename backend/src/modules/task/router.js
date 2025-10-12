const { Router } = require("express");

const taskController = require("./controller");
const { validateRequest } = require("../../middlewares/validateRequest");
const asyncHandler = require("../../handlers/asyncHandler");
const taskRequest = require("./request");

const PATH = "/task";
const router = Router();

router.get(
  `${PATH}/:id`,
  taskRequest.idValidator,
  validateRequest,
  asyncHandler(taskController.getById)
);
router.get(`${PATH}/`, asyncHandler(taskController.getAll));
router.post(
  `${PATH}/`,
  taskRequest.createValidator,
  validateRequest,
  asyncHandler(taskController.create)
);
router.put(
  `${PATH}/:id`,
  taskRequest.updateValidator,
  validateRequest,
  asyncHandler(taskController.update)
);
router.delete(
  `${PATH}/:id`,
  taskRequest.idValidator,
  validateRequest,
  asyncHandler(taskController.delete)
);

module.exports = { router };
