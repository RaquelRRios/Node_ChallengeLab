const response = require("../utils/response");
const ClienteDB = require("../repositories/clienteDB");
const CobrancaDB = require("../repositories/cobrancaDB");

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

async function listarClientes(ctx) {
  const lista = await ClienteDB.listarClientes();
  let cliente = new Set();
  for (let cliente of lista) {
    const cobrancas = await CobrancaDB.listaCobrancadeCliente();
    let cobrancasFeitas = 0;
    let cobrancasPagas = 0;
    let estaInadimplente = false;
    for (let cobranca of cobrancas) {
      cobrancasFeitas = cobrancasFeitas + 1;
      cobrancasPagas = cobrancasPagas + 1;
      if (cobranca.vencimento > new Date()) {
        estaInadimplente = true;
      }
    }

    cliente.add(cliente.id);
  }
  response(ctx, 200, [...lista]);
}

module.exports = {
  criarCliente,
  /*editarCliente,*/
  listarClientes,
  /*buscarClientes,*/
};
