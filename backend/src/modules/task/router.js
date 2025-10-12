const { Router } = require("express");
const { getById, getAll, create, update, trash } = require("./controller");

const PATH = "/task";
const router = Router();

router.get(`${PATH}/:id`, getById);
router.get(`${PATH}/`, getAll);
router.post(`${PATH}/`, create);
router.put(`${PATH}/:id`, update);
router.delete(`${PATH}/:id`, trash);

module.exports = { router };
