class BaseError extends Error {
  constructor(message, code, name, errorsFields = [], cause = null) {
    super(message, { cause });
    this.code = code;
    this.name = name;
    this.errorsFields = errorsFields;
    Error.captureStackTrace(this, this.constructor);
  }

  toPlain() {
    return {
      code: this.code,
      name: this.name,
      message: this.message,
      "errors_fields": JSON.parse(JSON.stringify(this.errorsFields)),
      stack: JSON.parse(JSON.stringify(this.stack || {})),
      cause: JSON.parse(JSON.stringify(this.cause || {})),
    };
  }
}

module.exports = BaseError;
