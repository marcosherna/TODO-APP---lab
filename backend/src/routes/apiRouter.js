const { Router } = require("express");
const { router: TaskRouter } = require("../modules/task/router");

const PATH = "/api";
const router = Router();

router.use(PATH, TaskRouter);

module.exports = { router };
