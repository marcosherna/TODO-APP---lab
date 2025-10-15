const { BaseError } = require("../errors");

function errorHandler(err, req, res, next) {
  if (err) {
    const isKnownError = err instanceof BaseError;
    const status = isKnownError && err.code ? err.code : 500;
    const message = isKnownError ? err.message : "Internal server error";

    const stackTrace = process.env.NODE_ENV === "production" ? null : err.stack;
    const cause = process.env.NODE_ENV === "production" ? null : err.cause;

    res.status(status).json({
      code: status,
      message,
      ...(isKnownError && err instanceof BaseError ? err.toPlain() : {}),
      stack: stackTrace,
      cause,
    });
  }
  next();
}

module.exports = errorHandler;
