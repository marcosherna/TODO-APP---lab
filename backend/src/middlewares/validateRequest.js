const { validationResult } = require("express-validator");

const { BadRequest } = require("../errors");

exports.validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const fields = errors.array().map((err) => ({
      ...err,
      property: err.path,
      path: undefined,
      value: undefined,
    }));
    throw new BadRequest("Validation request", fields);
  }
  next();
};
