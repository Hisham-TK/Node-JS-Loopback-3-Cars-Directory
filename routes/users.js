const
    // My functions
    l = console.log,

    // Required libraries
    // express = ,
    router = require('express').Router();

/* GET users listing. */
router.get('/', function (q, s, n) {
    s.send('respond with a resource');
});

module.exports = router;
