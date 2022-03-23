const route=require("express").Router()
const {AddCustomers,getAllCustomers,getUniqueCityAndNumberOfStudent,getCustomerById}=require("../controllers/customers")
route.post("/create/customers",AddCustomers)
route.get("/get/customers",getAllCustomers)
route.get("/city",getUniqueCityAndNumberOfStudent)
route.get("/customer/:_id",getCustomerById)
module.exports=route