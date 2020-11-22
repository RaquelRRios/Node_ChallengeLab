const response = require("../utils/response");

const criarClientes = async (ctx) => {
  const { cliente = null } = ctx.params;
  if (cliente) {
    const result = await Clientes.criarClientes(cliente);
    if (result) {
      return response(ctx, 200, result);
    }
  }
  return response(ctx, 400, { mensagem: "Error" });
};

module.exports = {
  criarClientes,
  editarCliente,
  listarClientes,
  buscarClientes,
};
