'use strict';

var express = require('express');
var controller = require('./cat.controller');

var router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);

module.exports = router;
