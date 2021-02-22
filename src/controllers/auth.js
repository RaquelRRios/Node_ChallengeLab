const jwt = require("jsonwebtoken");
const response = require("../utils/response");
const idValidation = require("../middlewares/idValidation");
const UserDB = require("../repositories/userDB");

require("dotenv").config();

const autenticar = async (ctx) => {
  const { email = null, password = null } = ctx.request.body;
  if (!email || !password) {
    return idValidation.response(ctx, 400, {
      mensagem: "Pedido mal formatado",
    });
  }

  const user = await UserDB.obterUsuarioPorEmail(email);

  if (user) {
    const comparison = await idValidation.check(password, user.senha);
    if (comparison) {
      const token = await jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET || "desafionode",
        {
          expiresIn: "1h",
        }
      );
      return response(ctx, 200, { token });
    }
  }

  return response(ctx, 200, {
    mensagem: "email ou senha incorretos",
  });
};

module.exports = { autenticar };
