const Joi = require('joi');

const loginSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }).required(),
  password: Joi.string().min(5).required(),
});

module.exports = loginSchema;
