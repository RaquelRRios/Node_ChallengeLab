const Router = require("koa-router");

const router = new Router();

const Auth = require("./controllers/auth");
const Clientes = require("./controllers/clientes");
const Cobrancas = require("./controllers/cobrancas");
const Relatorios = require("./controllers/relatorios");
const Usuarios = require("./controllers/usuarios");

const Password = require("./middlewares/encrypt");
const Session = require("./middlewares/session");

router.post("/auth", Auth.autenticar);
router.post("/clientes", Clientes.criarClientes);
router.put("/clientes", Clientes.editarCliente);
router.get("/clientes?clientesPorPagina=10&offset=20", Clientes.listarClientes);
router.get(
  "/clientes?busca=texto da busca&clientesPorPagina=10&offset=20",
  Clientes.buscarClientes
);
router.post("/cobrancas", Cobrancas.criarCobranca);
router.get(
  "/cobrancas?cobrancasPorPagina=10&offset=20",
  Cobrancas.listarCobrancas
);
router.put("/cobrancas", Cobrancas.pagarCobranca);
router.get("/relatorios", Relatorios.obterRelatorio);
router.post("/usuarios", Usuarios.criarUsuario);

module.exports = router;
