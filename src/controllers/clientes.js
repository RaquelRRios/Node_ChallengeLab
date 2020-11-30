const response = require("../utils/response");
const ClienteDB = require("../repositories/clienteDB");

const criarCliente = async (ctx) => {
  const {
    nome = null,
    email = null,
    cpf = null,
    tel = null,
  } = ctx.request.body;
  if (nome == null || email == null || cpf == null || tel == null) {
    return response(ctx, 400, {
      mensagem: "É necessário preencher todos os campos",
    });
  }
  const user = await ClienteDB.criarCliente(nome, email, cpf, tel);
  ctx.status = 201;
  ctx.body = {
    dados: {
      id: "id_do_cliente_criado",
    },
  };
};

module.exports = {
  criarCliente,
  /*editarCliente,
  listarClientes,
  buscarClientes,*/
};
