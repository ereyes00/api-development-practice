const router = require('express').Router();

router.use('/', require('./person-routes'));

module.exports = router;
