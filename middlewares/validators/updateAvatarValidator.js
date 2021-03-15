const { celebrate, Joi } = require('celebrate');

const updateAvatarValidator = celebrate({
  body: {
    // eslint-disable-next-line no-useless-escape
    avatar: Joi.string().required().pattern(new RegExp('^https?:\/\/[a-z0-9A-z\-]*[a-z]{2,10}\/?\w*\W*\S*')),
  },
});

module.exports = updateAvatarValidator;
