const { body, param } = require("express-validator");

exports.idValidator = [
  param("id").isInt().withMessage("El ID debe ser un número entero"),
];

exports.createValidator = [
  body("title")
    .notEmpty()
    .withMessage("El título es obligatorio")
    .isString()
    .withMessage("El título debe ser un texto")
    .isLength({ max: 100 })
    .withMessage("El título no puede superar 100 caracteres"),

  body("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser texto"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("El campo 'completed' debe ser booleano"),
];

exports.updateValidator = [
  param("id").isInt().withMessage("El ID debe ser un número entero"),

  body("title")
    .optional()
    .isString()
    .withMessage("El título debe ser texto")
    .isLength({ max: 100 })
    .withMessage("Máximo 100 caracteres"),

  body("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser texto"),

  body("completed").optional().isBoolean().withMessage("Debe ser booleano"),
];
