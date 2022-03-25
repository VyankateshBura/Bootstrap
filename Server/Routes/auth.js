const express = require('express')
const router = express.Router();
const {register} = require('../Controllers/Tasks')
router.route('/user').post(register)
router.post('/login',)

module.exports = router;