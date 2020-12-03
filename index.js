const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const router = require("./src/routes");
const cors = require("@koa/cors");

const server = new Koa();

const options = { origin: "*" };

server.use(cors(options));
server.use(bodyparser());
server.use(router.routes());

server.listen(8081, "0.0.0.0", () => console.log("Rodando!"));
