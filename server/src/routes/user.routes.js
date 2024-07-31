const express = require('express');
const router = express.Router();
const { register, login, googleLogin } = require('../controllers/user.controller');

router.post('/register', register);
router.post('/login', login);
router.post('/google', googleLogin);

module.exports = router;
