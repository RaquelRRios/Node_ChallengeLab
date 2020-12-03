const response = require("../utils/response");
const CobrancaDB = require("../repositories/cobrancaDB");

const criarCobranca = async (ctx) => {
  const {
    idDoCliente = null,
    descricao = null,
    valor = null,
    vencimento = null,
  } = ctx.request.body;
  if (
    idDoCliente == null ||
    descricao == null ||
    valor == null ||
    vencimento == null
  ) {
    return response(ctx, 400);
  }
  const user = await CobrancaDB.criarCobranca(
    idDoCliente,
    descricao,
    valor,
    vencimento
  );
  ctx.status = 201;
  ctx.body = {
    dados: {
      idDoCliente: "",
      descricao: "",
      valor: 120000,
      vencimento: "",
    },
  };
};
async function listarCobrancas(ctx) {
  const lista = await CobrancaDB.listarCobrancas();
  let cobranca = new Set();
  for (let id of cobranca) {
    cobranca.add(cobranca.id);
  }
  response(ctx, 200, [...lista]);
}

module.exports = {
  criarCobranca,
  listarCobrancas,
};

//  pagarCobranca
