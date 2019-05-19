import Joi from 'joi';
import EmployeeService from './employee.service';
import Employee from './employee.model';
import Department from './../department/department.model';
import jwt from './../../helpers/jwt';

export default {
  async create(req, res) {
    try {
      const { value, error } = EmployeeService.validateBody(req.body);
      if (error && error.details) {
        return res.json(error);
      }
      const randomPassword = Math.floor(100000 + Math.random() * 900000);
      value.password = randomPassword;
      const employee = await Employee.create(Object.assign({}, value, ));  
      for (var i = 0; i < value.departments.length; i++) {
        var department = await Department.findById(value.departments[i]);
        var employeesIds = [];
        // ******** CHECK DUPLICATE ******
        for (var j = 0; j < department.employees.length; j++) {
          if (value.departments.indexOf(department.employees[j]._id.toString()) == -1) {
            employeesIds.push(department.employees[j]._id.toString());
          }
        }
        employeesIds.push(employee._id);
        // **********UPDATE DEPARTMENT**********
        await Department.findOneAndUpdate({ _id: value.departments[i] }, {'employees': employeesIds}, {new: false});
      }
      return res.json(employee
        // department: updateDepart
      );

      // function create(body, callback) {
      //   var waterfallTasks;
      //       var password;
      //       var email;

      //       function employeeCreator(waterfallCb) {
      //         EmployeeService.create(body, waterfallCb);
      //       }

      //       function userCreator(employee, profileId, waterfallCb) {
      //         var _user;

      //         email = employee.workEmail || employee.personalEmail;

      //         password = randomPass.generate(8);

      //         _user = {
      //             login          : body.userName,
      //             imageSrc       : employee.imageSrc,
      //             pass           : password,
      //             profile        : profileId,
      //             email          : email,
      //             relatedEmployee: employee._id,
      //             dbName         : dbName
      //         };

      //         UserService.create(_user, function (err, user) {
      //             if (err) {
      //                 return waterfallCb(err);
      //             }

      //             waterfallCb(null, employee, user);
      //         });
      //     }

      //     function employeeUpdater(employee, user, waterfallCb) {
      //         var _id = employee._id;

      //         EmployeeService.findByIdAndUpdate(_id, {$set: {relatedUser: user._id}}, {dbName: dbName}, waterfallCb);
      //     }

      //     waterfallTasks = [employeeCreator];

      //         waterfallTasks.push(defaultProfile, userCreator, employeeUpdater);

      //     async.waterfall(waterfallTasks, callback);
      //}
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async login(req, res) {
    try {
      const { value, error } = EmployeeService.validateLogin(req.body);
      if (error) {
        return res.status(400).json(error);
      }
      const emp = await Employee.findOne({ email: value.email });
      if (!emp) {
        return res.status(401).json({ err: 'Email not register!' });
      }
      const authenticted = EmployeeService.comparePassword(value.password, emp.password);
      if (!authenticted) {
        return res.status(401).json({ err: 'Wrong password!' });
      }
      const token = jwt.issue({ id: emp._id }, '1d');
      return res.json({ 
        success: true,
        token: token
       });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async findOne(req, res) {
    try {
      const { id } = req.params;
      const employee = await Employee.findById(id).populate("departments", "title");
      if (!employee) {
        return res.status(404).json({ err: 'could not find employee' });
      }
      return res.json({
        success: "true",
        employee: employee
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async findAll(req, res) {
    try{
      const { page, perPage } = req.query;
      const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 20,
        populate: {
          path: 'departments',
          select: 'title',
        },
    }
        const employees = await Employee.paginate({}, options);
        return res.json({
          success: "true",
          employees: employees
        });
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const employee = await Employee.findOneAndRemove({ _id: id });
      if (!employee) {
        return res.status(404).json({ err: 'could not find employee' });
      }
      return res.json({
        success: true
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const schema = Joi.object().keys({
        fullname: Joi.string().optional().allow(null),
        email: Joi.string().optional().allow(null),
        phone: Joi.string().optional().allow(null),
        departments: Joi.array().items().optional(),
        identify: [{
          tax_number: Joi.string().optional(),
          ID: Joi.string().optional(),
          place_ID: Joi.string().optional(),
          date_ID: Joi.string().optional()
        }],
        homeAddress: {
          street: Joi.string().optional(),
          city: Joi.string().optional(),
          state: Joi.string().optional(),
          zip: Joi.string().optional(),
          country: Joi.string().optional()
        },
        jobType: Joi.string().allow(null),
        salary: Joi.string().optional().allow(null),
      });
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      // const employQuery = await Employee.findById(id);
      // var departmentIds = employQuery.departments.toString();
      // // ******** create employee with default one department *********
      // // if(departmentIdsArray==1) {
      // //   var departmentIdsArray = departmentIds
      // // } else {
      //   var departmentIdsArray = departmentIds.split(",");
      // //}
      // console.log(departmentIds);
      // console.log(departmentIdsArray.length);
      // console.log(departmentIdsArray);
      // for (var i = 0; i < value.departments.length; i++) {
      //   if (departmentIdsArray.indexOf(value.departments[i]) == -1) {
      //     departmentIdsArray.push(value.departments[i]);
      //   }
      // }
      const employQuery = await Employee.findById(id);
      var departmentIds = employQuery.departments.toString();
      var departmentIdsArray = [];
      
      if (departmentIds != "") {
        departmentIdsArray = departmentIds.split(",");
      }
      
      for (var i = 0; i < value.departments.length; i++) {
        if (departmentIdsArray.indexOf(value.departments[i]) == -1) {
          departmentIdsArray.push(value.departments[i]);
        }
      }
      value.departments = departmentIdsArray;
      
      const employee = await Employee.findOneAndUpdate({ _id: id }, value, { new: true });
      
      for (let i = 0; i < value.departments.length; i++) {
        var departQuery = await Department.findById(value.departments[i]);
        if (departQuery.employees.indexOf(employee._id.toString()) == -1) {
          departQuery.employees.push(employee._id.toString());
        }
        await Department.findOneAndUpdate({ _id:  value.departments[i]}, departQuery, { new: true });
      }

      if (!employee) {
        return res.status(404).json({ err: 'could not find employee' });
      }
      return res.json({
        success: true,
        employee: employee
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  }
};
