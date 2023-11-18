const ApiError = require("../api-errors");
function methodNotAllowed(req, res, next) {
  if (req.route) {
    const httpMethods = Object.keys(req.route.methods)
      .filter((method) => method !== "_all")
      .map((method) => method.toUpperCase());
    return next(
      new ApiError(405, "Method not allowed", {
        Allow: httpMethods.join(","),
      })
    );
  }
  return next();
}

function resourceNotFound(req, res, next) {
  return next(new ApiError(404, "resource not found"));
}

function handleError(error, req, res, next) {
  if (res.headerSent) {
    return next(Error);
  }
  return res
    .status(error.statusCode || 500)
    .set(error.headers || {})
    .json({
      message: error.message || "Internal Server Error",
    });
}

module.exports = {
  methodNotAllowed,
  resourceNotFound,
  handleError,
};
