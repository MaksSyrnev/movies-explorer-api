const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const createUserValidator = require('../middlewares/validators/createUserValidator');
const loginValidator = require('../middlewares/validators/loginValidator');
const auth = require('../middlewares/auth');
const authTokenValidator = require('../middlewares/validators/authTokenValidator');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/NotFound');

router.post('/signin', loginValidator, login);
router.post('/signup', createUserValidator, createUser);

router.use(authTokenValidator, auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use('/', (req, res, next) => {
  try {
    throw new NotFoundError('Запрашиваемый ресурс не найден');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
