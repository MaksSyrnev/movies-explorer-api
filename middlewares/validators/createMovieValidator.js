const { celebrate, Joi } = require('celebrate');

const createMovieValidator = celebrate({
  body: {
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(new RegExp('^https?://[a-z0-9A-z\\.\\-]*\\.[a-z]{2,}/?')),
    trailer: Joi.string().required().pattern(new RegExp('^https?://[a-z0-9A-z\\.\\-]*\\.[a-z]{2,}/?')),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().pattern(new RegExp('^https?://[a-z0-9A-z\\.\\-]*\\.[a-z]{2,}/?')),
    movieId: Joi.number().integer().required(),
  },
});

module.exports = createMovieValidator;
