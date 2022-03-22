const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sublime:sublime@cluster0.tj8fk.mongodb.net/sublime?retryWrites=true&w=majority",{
    useNewUrlParser:true,
   useUnifiedTopology:true
}).then(()=>{console.log("database connected")}).catch((err)=>{console.log(err)})