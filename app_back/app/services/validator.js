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
    console.log(validatedBody.error);
    const errorJson = validatedBody.error.details.map( element => element.message);
    res.status(400).json({ error: errorJson});
  }
  else {
    next();
  }
};

module.exports = {
  validateBody,
  validateQuery,
};
