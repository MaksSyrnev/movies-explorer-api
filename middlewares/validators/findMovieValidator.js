const { celebrate, Joi } = require('celebrate');

const findMovieValidator = celebrate({
  params: {
    movieId: Joi.string().hex().length(24),
  },
});

module.exports = findMovieValidator;
