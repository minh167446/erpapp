import mongoose from 'mongoose';

export const STANDARD_ROLE = 2;
export const ROOT_ROLE = 1;
const { Schema } = mongoose;
const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    default: 2,
    required: true,
    type: Number,
  },
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
});

// userSchema.methods.gravatar = function(size) {
//   if(!this.size) size = 300;
//   if(!this.email) 
//   {
//       return 'https://gravatar.com/avatar/?s' + size + '&d=retro';
//   } else {
//       var md5 = crypto.createHash('md5').update(this.email).digest('hex');
//       return 'https://gravatar.com/avatar/' + md5 + '?s' + size + '&d=retro';
//   }
// }

export default mongoose.model('User', userSchema);
