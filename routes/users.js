const router = require('express').Router();
const { findMe, updateUser } = require('../controllers/users');
//const findUserValidator = require('../middlewares/validators/findUserValidator');
const updateUserValidator = require('../middlewares/validators/updateUserValidator');
// # возвращает информацию о пользователе (email и имя)
// GET /users/me
router.get('/me', findMe);

// # обновляет информацию о пользователе (email и имя)
// PATCH /users/me
router.patch('/me', updateUserValidator, updateUser);

module.exports = router;
