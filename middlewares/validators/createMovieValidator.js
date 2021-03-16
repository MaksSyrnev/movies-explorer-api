const { celebrate, Joi } = require('celebrate');

const createMovieValidator = celebrate({
  body: { // country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail,
    country: Joi.string().required().min(2).max(30),
    director: Joi.string().required().min(2).max(30),
    duration: Joi.number().required().min(1).max(10),
    year: Joi.string().required().max(4),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(new RegExp('^https?:\/\/[a-z0-9A-z\-]*[a-z]{2,10}\/?\w*\W*\S*')),
    trailer: Joi.string().required().pattern(new RegExp('^https?:\/\/[a-z0-9A-z\-]*[a-z]{2,10}\/?\w*\W*\S*')),
    nameRU: Joi.string().required().min(2).max(30),
    nameEN: Joi.string().required().min(2).max(30),
    thumbnail: Joi.string().required().pattern(new RegExp('^https?:\/\/[a-z0-9A-z\-]*[a-z]{2,10}\/?\w*\W*\S*')),
    owner: Joi.string().required().alphanum().length(24),
  },
});

module.exports = createMovieValidator;
