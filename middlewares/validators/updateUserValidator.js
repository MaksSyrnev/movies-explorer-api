const { celebrate, Joi } = require('celebrate');

const updateUserValidator = celebrate({
  body: {
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  },
});

module.exports = updateUserValidator;
