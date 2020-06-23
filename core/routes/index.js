const router = require('express').Router();
const post = require('./posts/index');

router.use('/posts', post)

module.exports = router;