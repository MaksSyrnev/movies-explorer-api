const { celebrate, Joi } = require('celebrate');

const authTokenValidator = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
});

module.exports = authTokenValidator;
