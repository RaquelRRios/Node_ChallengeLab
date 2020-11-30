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
      cobranca: {
        idDoCliente: "idDoCliente",
        descricao: "descrição da cobrança",
        valor: 120000,
        vencimento: "data_de_vencimento",
        linkDoBoleto: "http://link.do.boleto",
        status: AGUARDANDO | PAGO | VENCIDO,
      },
    },
  };
};

module.exports = { criarCobranca }; /* listarCobrancas, pagarCobranca*/
