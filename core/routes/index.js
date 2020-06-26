const router = require("express").Router();
const post = require("./posts/index");
const users = require("./users/index");
const auth = require("./auth/index");

router.use("/posts", post);
router.use("/users", users);
router.use("/auth", auth);

module.exports = router;
