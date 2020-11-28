const db = require("../utils/database");
const response = require("../utils/response");

async function obterUsuarioPorEmail(email) {
  const query = "SELECT * FROM usuario where email = $1";

  const result = await db.query({
    text: query,
    values: [email],
  });

  return result.rows.shift();
}

module.exports = { obterUsuarioPorEmail };
