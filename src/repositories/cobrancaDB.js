const db = require("../utils/database");
const response = require("../utils/response");

const criarCobranca = async (idDoCliente, descricao, valor, vencimento) => {
  const query =
    "INSERT INTO cobranca(idDoCliente, descricao, valor, vencimento) VALUES ($1, $2, $3, $4) RETURNING *";
  const cobranca = await database.query({
    text: query,
    values: [idDoCliente, descricao, valor, vencimento],
  });
  return cobranca.rows[0];
};

module.exports = { criarCobranca };
