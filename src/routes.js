const Router = require("koa-router");

const router = new Router();

const Auth = require("./controllers/auth");
const Clientes = require("./controllers/clientes");
const Cobrancas = require("./controllers/cobrancas");
/*const Relatorios = require("./controllers/relatorios");*/
const Usuarios = require("./controllers/usuarios");

/*const Password = require("./middlewares/encrypt");
const Session = require("./middlewares/session");*/

router.post("/auth", Auth.autenticar);
router.post("/clientes", Clientes.criarCliente);
/*router.put("/clientes", Session.verify, Clientes.editarCliente);
router.get("/clientes", Clientes.listarClientes);
router.get("/clientes/:id", Clientes.buscarClientes);*/
router.post("/cobrancas", Cobrancas.criarCobranca);
/*router.get("/cobrancas", Cobrancas.listarCobrancas);
router.put("/cobrancas", Session.verify, Cobrancas.pagarCobranca);
router.get("/relatorios", Relatorios.obterRelatorio);*/
router.post("/usuarios", Usuarios.criarUsuario);

module.exports = router;
