const BaseError = require("./baseError");

class BadRequest extends BaseError {
  constructor(message, errorFlelds = [], cause = null) {
    super(message, 400, "Bad request", errorFlelds, cause);
  }
}

module.exports = BadRequest
