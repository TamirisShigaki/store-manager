const Joi = require('joi');

const schemas = {
  name: Joi.object({
    name: Joi.string().min(5).required(),
  }),
};

const validateSchema = (schema, dataToValidate) => {
  const { error, value } = schema.validate(dataToValidate);
  if (error) throw error;
  return value;
};

module.exports = {
  validateSchema,
  schemas,
};