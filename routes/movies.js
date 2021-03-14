const router = require('express').Router();

const {
  findMovies, createMovie, delMovie,
} = require('../controllers/movies');

// # возвращает все сохранённые пользователем фильмы
// GET /movies
router.get('/', findMovies);

// # создаёт фильм с переданными в теле
// # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail
// POST /movies
router.post('/', createMovie);

// # удаляет сохранённый фильм по _id
// DELETE /movies/movieId
router.delete('/:movieId', delMovie);

module.exports = router;
