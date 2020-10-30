const validateQuery = (schema) => (req, res, next) => {
  const validatedBody = schema.validate(req.query);

  if (validatedBody.error) {
    res.status(400).json(validatedBody.error);
  }
  else {
    next();
  }
};

const validateBody = (schema) => (req, res, next) => {
  const validatedBody = schema.validate(req.body);

  if (validatedBody.error) {
    
    res.status(400).json({ error: validatedBody.error });
  }
  else {
    next();
  }
};

module.exports = {
  validateBody,
  validateQuery,
};
