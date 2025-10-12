const BaseError = require("./baseError");

class NotFound extends BaseError {
  constructor(message, errorFields = [], cause = null) {
    super(message, 404, "Not found", errorFields, cause);
  }
}

module.exports = NotFound;
