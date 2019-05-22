const express = require('express');
const router = express.Router();
const setup_controller = require('../../controllers/setupController');

router.post('/', setup_controller.setup);

module.exports = router;