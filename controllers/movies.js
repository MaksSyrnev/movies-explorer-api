const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');

// # возвращает все сохранённые пользователем фильмы
// GET /movies
const findMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((data) => res.send(data))
    .catch(next);
};

// # создаёт фильм с переданными в теле
// // # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail
const createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    owner: req.user._id,
    movieId,
  })
    .then((data) => res.send(data))
    .catch((err) => {
      next(err);
    });
};

// # удаляет сохранённый фильм по _id
// DELETE /movies/movieId
const delMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((data) => {
      if (!data) {
        throw new NotFoundError('Фильм не найден');
      }
      // eslint-disable-next-line eqeqeq
      if (req.user._id == data.owner) {
        Movie.findByIdAndRemove(req.params.movieId)
          .then((movie) => {
            res.send(movie);
          });
      } else {
        throw new BadRequest('Чужой фильм');
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  findMovies, createMovie, delMovie,
};
