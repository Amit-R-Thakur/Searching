const route=require("express").Router()
const {AddCustomers,getAllCustomers,getUniqueCityAndNumberOfStudent}=require("../controllers/customers")
route.post("/create/customers",AddCustomers)
route.get("/get/customers",getAllCustomers)
route.get("/city",getUniqueCityAndNumberOfStudent)
module.exports=route