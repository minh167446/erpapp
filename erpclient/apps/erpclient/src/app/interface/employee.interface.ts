export interface Employee {
    fullname: String ,
  email: String,
  phone: String,
  address: {
    street : String,
    city   : String,
    state  : String,
    zip    : String,
    country: String
  },
  jobType: {
    type: String, 
    default: ''
  },
  relatedUser: Object,
  password: String,
  position: Object,
  manager: Object,
  salary: String,
  hired_at: Date,
   identify: [{
    tax_number: String,
    ID: String,
    place_ID: String,
    date_ID: String
  }],
  departments: [Object]
}