import mongoose from 'mongoose';

const { Schema } = mongoose;
const positionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Employee must enter his position']
    },
    description: {
        type: String,
        required: [true, 'Employee must have description about position']
    },
    employee_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Employee',
          required: true,
        },
      ],
    department_id: [
        {
        type: mongoose.Schema.Types.ObjectId,
          ref: 'Department'
        },
      ],
    user_create: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    created_at: [
        {
            type: Date,
            default: Date.now
        }
    ]    
});
export default mongoose.model('Position', positionSchema);