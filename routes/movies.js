const router = require('express').Router();
const {
  findMovies, createMovie, delMovie,
} = require('../controllers/movies');
const createMovieValidator = require('../middlewares/validators/createMovieValidator');
const findMovieValidator = require('../middlewares/validators/findMovieValidator');

// # возвращает все сохранённые пользователем фильмы
// GET /movies
router.get('/', findMovies);

// # создаёт фильм с переданными в теле
// # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail
// POST /movies
router.post('/', createMovieValidator, createMovie);

// # удаляет сохранённый фильм по _id
// DELETE /movies/movieId
router.delete('/:movieId', findMovieValidator, delMovie);

module.exports = router;
