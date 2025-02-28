let express=require("express")
let mongoose=require("mongoose")
let userSchema=new mongoose.Schema({
    "_id":String,
    "name":String,
    "password":String,
    "gender":String,
    "phno":String,
    "role":{
        type:String,
        default:"user"
    }
})
let usermodel=mongoose.model("usersdata",userSchema)
module.exports=usermodel