const response = require("../utils/response");
const ClienteDB = require("../repositories/clienteDB");

const criarCliente = async (ctx) => {
  const { nome = null, email = null, senha = null } = ctx.request.body;
  if (nome == null || email == null || senha == null) {
    return response(ctx, 400, {
      mensagem: "É necessário preencher todos os campos",
    });
  }
  const user = await ClienteDB.criarCliente(nome, email, senha);
  ctx.status = 201;
  ctx.body = {
    dados: {
      id: user.id,
    },
  };
};

module.exports = {
  criarCliente,
  /*editarCliente,
  listarClientes,
  buscarClientes,*/
};
