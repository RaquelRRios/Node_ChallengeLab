const Router = require("koa-router");

const router = new Router();

const Auth = require("./controllers/auth");
const Followers = require("./controllers/followers");
const Followings = require("./controllers/followings");
const Users = require("./controllers/users");

const idValidation = require("./middlewares/idValidation");

router.post("/auth", Auth.autenticar);
router.get("/followers", Followers.followers);
router.post("/followers", Followers.follower);
router.put("/followers", Followers.follower);

module.exports = router;
