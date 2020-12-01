const clientes = require("../controllers/clientes");
const database = require("../utils/database");

const criarCliente = async (nome, email, cpf, tel) => {
  const query =
    "INSERT INTO cliente(nome, email, cpf, tel) VALUES ($1, $2, $3, $4) RETURNING *";
  const cliente = await database.query({
    text: query,
    values: [nome, email, cpf, tel],
  });
  return cliente.rows[0];
};

async function listarClientes() {
  const query = `SELECT * FROM cliente`;
  const result = await database.query(query);
  return result.rows;
}

module.exports = { criarCliente, listarClientes };
