const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const createUserValidator = require('../middlewares/validators/createUserValidator');
const loginValidator = require('../middlewares/validators/loginValidator');
const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/NotFound');

router.post('/signin', loginValidator, login);
router.post('/signup', createUserValidator, createUser);

router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use('/', (req, res, next) => {
  const err = new NotFoundError('Запрашиваемый ресурс не найден');

  next(err);
});

module.exports = router;
