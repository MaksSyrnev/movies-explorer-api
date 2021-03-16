const { celebrate, Joi } = require('celebrate');

const updateUserValidator = celebrate({
  body: {
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    name: Joi.string().min(2).max(30).required(),
  },
});

module.exports = updateUserValidator;
