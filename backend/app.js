const express=require("express")
const cors=require("cors")
const app =express()
const port=process.env.PORT||3443
const customersRoute=require("./routes/custumers")
const rootRoute="/sublime/api"
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{res.send("Hello")})
app.use(rootRoute,customersRoute)
app.listen(port,()=>{
    console.log(`App is running on Port ${port}`)
})