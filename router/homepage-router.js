const express=require("express");
const homepage = require("../controllers/homePage");
const app=express();
const Router=express.Router();

Router.route("/home").get(homepage)
module.exports=Router;