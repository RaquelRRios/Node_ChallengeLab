const { validate } = require("uuid");

module.exports = async function idValidation(request, response, next) {
  if (!validate(request.params.id)) {
    return response.status(400).json({ error: "id is not in UUID pattern" });
  }

  return next();
};
