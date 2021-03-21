const { celebrate, Joi } = require('celebrate');

const createUserValidator = celebrate({
  body: {
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    password: Joi.string().required(),
    name: Joi.string().required().min(2).max(30),
  },
});

module.exports = createUserValidator;
