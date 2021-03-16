const { celebrate, Joi } = require('celebrate');

const findMovieValidator = celebrate({
  params: {
    movieId: Joi.string().required().alphanum().length(24),
  },
});

module.exports = findMovieValidator;
