const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFound');
const Forbidden = require('../errors/Forbidden');

// # возвращает все сохранённые пользователем фильмы
// GET /movies
const findMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

// # создаёт фильм с переданными в теле
// # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail
const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description, image, trailer, nameRU, nameEN, thumbnail, movieId,
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
    .then((data) => res.send(
      {
        _id: data._id,
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
      },
    ))
    .catch((err) => {
      next(err);
    });
};

// # удаляет сохранённый фильм по _id
// DELETE /movies/movieId
const delMovie = (req, res, next) => {
  Movie.findMovieAndOwner(req.params.movieId)
    .then((data) => {
      if (!data) {
        throw new NotFoundError('Фильм не найден');
      }

      let { owner } = data;
      owner = String(owner);

      if (req.user._id === owner) {
        Movie.findByIdAndRemove(req.params.movieId)
          .then((movie) => res.send(
            {
              _id: movie._id,
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: movie.image,
              trailer: movie.trailer,
              nameRU: movie.nameRU,
              nameEN: movie.nameEN,
              thumbnail: movie.thumbnail,
              movieId: movie.movieId,
            },
          ));
      } else {
        throw new Forbidden('Чужой фильм');
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  findMovies, createMovie, delMovie,
};
