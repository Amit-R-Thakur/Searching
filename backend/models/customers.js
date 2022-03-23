const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    uppercase: true,
  },
  last_name: {
    type: String,
    required: true,
    uppercase: true,
  },
  city: {
    type: String,
    required: true,
    uppercase: true,
  },
  company: {
    type: String,
    required: true,
    uppercase: true,
  },
});
const customer= new mongoose.model("customer",CustomerSchema)
module.exports=customer
