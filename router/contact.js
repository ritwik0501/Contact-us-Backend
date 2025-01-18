const express=require("express")
const contactform=require("../controllers/contact")
const router=express.Router();

router.route("/contact").post(contactform);

module.exports=router;