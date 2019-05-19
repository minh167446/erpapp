import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const ObjectId = mongoose.Schema.Types.ObjectId;
const { Schema } = mongoose;

const employeeSchema = new Schema({
  fullname: {type: String, default: ''},
  email: {type: String, default: ''},
  phone: {type: String, default: ''},
  address: {
    street : {type: String, default: ''},
    city   : {type: String, default: ''},
    state  : {type: String, default: ''},
    zip    : {type: String, default: ''},
    country: {type: String, default: ''}
  },
  jobType: {
    type: String, 
    default: ''
  },
  relatedUser: {
    type:ObjectId, ref: 'User', default: null
  }
  ,
  password: {
    type: String, default: ''
  },
  hired_at: {
    type: Date,
    default: Date.now
  },
  // position: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Position'
  // },
  // manager: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Employee'
  // },
  salary: String,
  hired_at: {
    type: Date,
    default: Date.now
  },
   identify: [{
    tax_number: String,
    ID: String,
    place_ID: String,
    date_ID: String
  }],
  departments: [{type: ObjectId, ref: 'Department', default:null}]
});
employeeSchema.plugin(mongoosePaginate);
export default mongoose.model('Employee', employeeSchema);
