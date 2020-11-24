const database = require("../utils/database");

const criarCliente = async (nome, email, senha) => {
  const query =
    "INSERT INTO cliente(nome, email, senha) VALUES ($1, $2, $3) RETURNING *";
  const cliente = await database.query({
    text: query,
    values: [nome, email, senha],
  });
  return cliente.rows[0];
};

module.exports = { criarCliente };
