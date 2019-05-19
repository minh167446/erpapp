import Joi from 'joi';
import Position from './position.model';

export default { 
    async create(req, res) {
        try {
        const schema = Joi.object().keys({ 
            title: Joi.string().required(),
            description: Joi.string().required(),
            employee_id: Joi.string().allow().required()
        });
        const { value, error } = Joi.validate(req.body, schema);
        if (error && error.details) {
          return res.status(400).json(error);
        }
        const position = await Position.create(Object.assign({}, { user_create: req.user._id }));
          return res.json(position);
        } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    }
    ,async findOne(req, res) {
        try {
            const { id } = req.params;
            const position = await Position.findById(id)
                                            .populate('employee', 'fullname')
            if (!position) {
                return res.status(404).json({ err: 'could not find position of employee' });
              }
              return res.json(employee);  
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
          }
    }
};