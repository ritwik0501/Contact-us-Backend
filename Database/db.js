const mongoose=require("mongoose")
const URI=process.env.URI;
const dbconnect=async()=>{
try {
   await mongoose.connect(URI);
    console.log("Database connection established.....")
} catch (error) {
    console.log("Database connection failed",error)
}
}
module.exports=dbconnect;