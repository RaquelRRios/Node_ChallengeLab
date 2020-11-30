const response = require("../utils/response");
const UsuarioDB = require("../repositories/usuarioDB");

const criarUsuario = async (ctx) => {
  const { nome = null, email = null, senha = null } = ctx.request.body;
  if (nome == null || email == null || senha == null) {
    return response(ctx, 400, {
      mensagem: "É necessário preencher todos os campos",
    });
  }
  const user = await UsuarioDB.criarUsuario(nome, email, senha);
  ctx.status = 201;
  ctx.body = {
    dados: {
      id: "id_do_usuario_criado",
    },
  };
};

module.exports = { criarUsuario };
