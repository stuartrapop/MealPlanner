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
    'string.email': 'Vous devez spécifier un email valide',
    'string.empty': 'Vous devez spécifier un email',
  }),
  password: passwordComplexity(complexityOptions).messages({
    'passwordComplexity.symbol': 'Votre mot de passe doit contenir au moins un symbole (! * / + - ; ex...)',
    'string.empty': 'Vous devez spécifier un mot de passe',
    'passwordComplexity.numeric': 'Votre mot de passe doit contenir au moins un chiffre',
    'passwordComplexity.tooShort': 'Votre mot de passe doit contenir au moins 5 caractères',
    'passwordComplexity.lowercase': 'Votre mot de passe doit contenir au moins une lettre minuscule',
    'passwordComplexity.uppercase': 'Votre mot de passe doit contenir au moins une lettre majuscule',
  }),
});

module.exports = loginSchema;
