const route=require("express").Router()
const {AddCustomers}=require("../controllers/customers")
route.post("/create/customers",AddCustomers)
module.exports=route