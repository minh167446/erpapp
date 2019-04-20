import Joi from 'joi';

export default {
  validateBody(body) {
    const schema = Joi.object().keys({
      fullname: Joi.string().min(3).max(30).required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
      identify: Joi.array().items().optional().allow(null),
      address: Joi.object().pattern(/.*/, [Joi.string(), Joi.string(), Joi.string(), Joi.string(),Joi.string()]).allow(null),
      password: Joi.string().allow(''),
      jobType: Joi.string().allow(null),
      salary: Joi.string().optional().allow(null),
      //required one department selected
      departments: Joi.array().items(Joi.string().min(1).required())
    });
    const { value, error } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
  validateLogin(body) {
    const schema = Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().allow(''),
    });
    const { value, error } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
  comparePassword(password, dbPassword) {
    return (password == dbPassword);
  },
};
