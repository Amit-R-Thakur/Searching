const route=require("express").Router()
const {AddCustomers,getAllCustomers}=require("../controllers/customers")
route.post("/create/customers",AddCustomers)
route.get("/get/customers",getAllCustomers)
module.exports=route