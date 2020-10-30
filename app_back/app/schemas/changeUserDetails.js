const Joi = require('joi');

const changeUserDetails = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'Vous devez spécifier un prénom',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Vous devez spécifier un nom de famille',
  }),
  userName: Joi.string().required().messages({
    'string.empty': 'Vous devez spécifier un pseudo',
  }),
});

module.exports = changeUserDetails;
