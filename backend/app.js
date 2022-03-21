const express=require("express")
const app =express()
const port=process.env.PORT||3443
app.get("/",(req,res)=>{res.send("Hello")})
app.listen(port,()=>{
    console.log(`App is running on Port ${port}`)
})