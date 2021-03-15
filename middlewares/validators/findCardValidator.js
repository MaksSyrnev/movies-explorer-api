const { celebrate, Joi } = require('celebrate');

const findCardValidator = celebrate({
  params: {
    cardId: Joi.string().alphanum().length(24),
  },
});

module.exports = findCardValidator;
