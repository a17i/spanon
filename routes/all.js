var express = require('express');
var router = express.Router();

/* GET all page. */
router.get('/.*', function(req, res, next) {
    res.render('all', {
        title: require('url').parse(req.url).query
    });
});

module.exports = router;
