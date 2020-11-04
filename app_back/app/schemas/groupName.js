const Joi = require('joi');

const groupNameSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Veuillez entrer un nom pour votre groupe',
  }),
  userId: Joi.number().required().messages({
    'number.base': 'Il faut indiquer le id user',
  }),

});

module.exports = groupNameSchema;
