const { Router } = require("express");
const taskController = require("./controller");

const PATH = "/task";
const router = Router();

router.get(`${PATH}/:id`, taskController.getById);
router.get(`${PATH}/`, taskController.getAll);
router.post(`${PATH}/`, taskController.create);
router.put(`${PATH}/:id`, taskController.update);
router.delete(`${PATH}/:id`, taskController.delete);

module.exports = { router };
