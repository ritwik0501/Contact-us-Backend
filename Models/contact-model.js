
const mongoose=require("mongoose")
const contactmodel=new mongoose.Schema({
    topic:{
        type:String,
        enum:["Residental","Commercial","others"]
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String
    },
    message:{
        type:String,
        require:true
    }
})
const contactdata=mongoose.model("contactdata",contactmodel);
module.exports=contactdata;