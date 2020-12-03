const db = require("../utils/database");
const cobrancas = "./controllers/cobrancas";

const criarCobranca = async (idDoCliente, descricao, valor, vencimento) => {
  const query =
    "INSERT INTO cobranca(idDoCliente, descricao, valor, vencimento) VALUES ($1, $2, $3, $4) RETURNING *";
  const cobranca = await db.query({
    text: query,
    values: [idDoCliente, descricao, valor, vencimento],
  });
  return cobranca.rows[0];
};

async function listarCobrancas() {
  const query = `SELECT * FROM cobranca`;
  const result = await db.query(query);
  return result.rows;
}

// async function listaCobrancadeCliente(id) {
//   const query = `SELECT * FROM cobranca WHERE idDoCliente = $1`;
//   const result = await db.query({
//     text: query,
//     values: [idDoCliente],
//   });
//   return result.rows;
// }

module.exports = { criarCobranca, listarCobrancas /*listaCobrancadeCliente*/ };
