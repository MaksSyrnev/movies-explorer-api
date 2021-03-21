const { celebrate, Joi } = require('celebrate');

const loginValidator = celebrate({
  body: {
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    password: Joi.string().required(),
  },
});

module.exports = loginValidator;
