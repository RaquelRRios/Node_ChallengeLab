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

const criarUsuario = async (nome, email, senha) => {
  const query =
    "INSERT INTO usuario(nome, email, senha) VALUES ($1, $2, $3) RETURNING *";
  const usuario = await db.query({
    text: query,
    values: [nome, email, senha],
  });
  return usuario.rows[0];
};

module.exports = { obterUsuarioPorEmail, criarUsuario };
