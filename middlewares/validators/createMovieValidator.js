const { celebrate, Joi } = require('celebrate');

const createMovieValidator = celebrate({
  body: {
    country: Joi.string().required().min(2).max(30),
    director: Joi.string().required().min(2).max(30),
    duration: Joi.number().required().min(1),
    year: Joi.string().required().max(4),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(new RegExp('^https?:\/\/[a-z0-9A-z\-]*[a-z]{2,10}\/?\w*\W*\S*')),
    trailer: Joi.string().required().pattern(new RegExp('^https?:\/\/[a-z0-9A-z\-]*[a-z]{2,10}\/?\w*\W*\S*')),
    nameRU: Joi.string().required().min(2).max(30),
    nameEN: Joi.string().required().min(2).max(30),
    thumbnail: Joi.string().required().pattern(new RegExp('^https?:\/\/[a-z0-9A-z\-]*[a-z]{2,10}\/?\w*\W*\S*')),
    movieId: Joi.string().required(),
  },
});

module.exports = createMovieValidator;
