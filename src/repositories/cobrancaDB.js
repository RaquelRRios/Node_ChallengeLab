const db = require("../utils/database");
const cobrancas = "./controllers/cobrancas";

const criarCobranca = async (descricao, valor, vencimento) => {
  const query =
    "INSERT INTO cobranca(descricao, valor, vencimento) VALUES ($1, $2, $3) RETURNING *";
  const cobranca = await db.query({
    text: query,
    values: [descricao, valor, vencimento],
  });
  return cobranca.rows[0];
};

async function listarCobrancas() {
  const query = `SELECT * FROM cobranca`;
  const result = await db.query(query);
  return result.rows;
}

module.exports = { criarCobranca, listarCobrancas };
