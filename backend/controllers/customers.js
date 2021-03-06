const customer=require("../models/customers")

exports.AddCustomers=async(req,res)=>{
    try{
        const {first_name,last_name,city,company}=req.body
        if(!first_name||!last_name||!city||!company)
        return res.status(400).send("all field is required!")
        const newCustomer=new customer({first_name,last_name,city,company})
        const theCustomer=await newCustomer.save()
        if(theCustomer)
        return res.status(200).send("customer added!")

    }
    catch(err){
        console.log(err)
        return res.status(400).send("something went wrong!")
    }
}
exports.getAllCustomers=async(req,res)=>{
    try{
        const limit=8
        const {page,search}=req.query
        const start=(Number(page)-1)*limit
        let totalDoc;
        if(search)
         totalDoc=await customer.count({$or:[{first_name:{$regex:search}}]})
        else
         totalDoc=await customer.count()
        const totalPage=Math.ceil(totalDoc/limit)
        let data;
        if(search)
         data=await customer.find({$or:[{first_name:{$regex:search}}]}).skip(start).limit(limit)
         else
         data=await customer.find({}).skip(start).limit(limit)
        if(!data)
        return res.status(400).send("data not found!")
        return res.status(200).send({users:data,totalPage})

    }
    catch(err){
        console.log(err)
        return res.status(400).send("data not found!")
    }
}

exports.getUniqueCityAndNumberOfStudent=async(req,res)=>{
    try{
        let dataToSend=[]
        const theCity=await customer.find().distinct("city")
       for(let i=0;i<theCity.length;i++){
           const totalUser=await customer.count({city:theCity[i]})
           dataToSend.push({city:theCity[i],customers:totalUser})
       }
       res.send(dataToSend)

    }
    catch(err){
        console.log(err)
    }
}

exports.getCustomerById=async(req,res)=>{
    try{
       
        const {_id}=req.params
        if(!_id)
        return res.status(400).send("id is required!")
        const theCustomer=await customer.findById(_id)
        if(!theCustomer)
        return res.status(400).send("user not found!")
        return res.status(200).send(theCustomer)

    }
    catch(err){
        console.log(err)
        return res.status(400).send("user not found!")
    }
}