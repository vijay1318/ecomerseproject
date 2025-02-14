let mongoose=require("mongoose")
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "phno":String,
    "gender":String,
    "pwd":String,
    "role":{
        "type":String,
        "default":"user"
    }
})
let userm=mongoose.model("user",usersch)
module.exports=userm