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
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'fr'] } }).required(),
  password: passwordComplexity(complexityOptions),
});

module.exports = loginSchema;
