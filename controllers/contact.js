const nodemailer=require("nodemailer")
const contactdata=require("../Models/contact-model")
const contactform=async(req,res)=>{
try {
    const contactdata_frontend=req.body;
    await contactdata.create(contactdata_frontend);
    res.status(200).json({message:"your message is send!!"})
    //auto_metic email system
    let transporter = nodemailer.createTransport({
        service: 'gmail',  
        auth: {
          user: "e55395007@gmail.com",  
          pass: 'oema eqxc nrbk yawa'    
        }
      });
    
      let mailOptions = {
        from: 'e55395007@gmail.com',      
        to: contactdata_frontend.email,      
        subject: 'TO-LET-GLOBE-CONTACT US',             
        text: 'Thank You for Your Valuable message!!',  
        html: ''  
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error occurred:', error);
        } else {
          console.log('Email sent to : '+contactdata_frontend.email);
        }
      });
} catch (error) {
    res.status(401).json({message:"Opps!!Try again to send message"})
}
}
module.exports=contactform;