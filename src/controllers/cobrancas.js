const response = require("../utils/response");
const CobrancaDB = require("../repositories/cobrancaDB");

const criarCobranca = async (ctx) => {
	const { idDoCliente = null, descricao = null, valor = null, vencimento = null} = ctx.request.body;
	if { idDoCliente == null || descricao == null || valor == null || vencimento == null }
}

module.exports = { criarCobranca/*, listarCobrancas, pagarCobranca*/ };
