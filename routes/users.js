const router = require('express').Router();
const { findMe, updateUser } = require('../controllers/users');

// # возвращает информацию о пользователе (email и имя)
// GET /users/me
router.get('/me', findMe);

// # обновляет информацию о пользователе (email и имя)
// PATCH /users/me
router.patch('/me', updateUser);

module.exports = router;
