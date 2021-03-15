const { celebrate, Joi } = require('celebrate');

const createCardValidator = celebrate({
  body: {
    name: Joi.string().min(2).max(30),
    // eslint-disable-next-line no-useless-escape
    link: Joi.string().pattern(new RegExp('^https?:\/\/[a-z0-9A-z\-]*[a-z]{2,10}\/?\w*\W*\S*')),
  },
});

module.exports = createCardValidator;
