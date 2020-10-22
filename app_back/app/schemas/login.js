const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

// rules for password validation
const complexityOptions = {
  min: 5,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 4,
};

const loginSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'Vous devez spécifier un prénom',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Vous devez spécifier un nom de famille',
  }),
  userName: Joi.string().required().messages({
    'string.empty': 'Vous devez spécifier un pseudo',
  }),
  accountRole: Joi.string(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'fr'] } }).required().messages({
    'string.email': 'Vous devez spécifier un email valable',
  }),
  password: passwordComplexity(complexityOptions).messages({
    'passwordComplexity.symbol': 'Error mot de passe : au moins un symbol',
    'passwordComplexity.numeric': 'Error mot de passe : au moins un chiffre',
    'passwordComplexity.tooShort': 'Error mot de passe : au moins 5 charactères',
    'passwordComplexity.lowercase': 'Error mot de passe : au moins une lettre miniscule',
    'passwordComplexity.uppercase': 'Error mot de passe : au moins une lettre majiscule',
  }),
});

module.exports = loginSchema;
