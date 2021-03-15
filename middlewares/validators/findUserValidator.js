const { celebrate, Joi } = require('celebrate');

const findUserValidator = celebrate({
  params: {
    userId: Joi.string().alphanum().length(24),
  },
});

module.exports = findUserValidator;
