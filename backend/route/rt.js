let express=require("express")
const { userdata, userlogin } = require("../control/contor")
let route=new express.Router()
route.post("/reg",userdata)
route.get("/login",userlogin)
module.exports=route