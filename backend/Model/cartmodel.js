let mongoose=require("mongoose")
const { stringify } = require("uuid")
let cartsch=new mongoose.Schema({
    "_id":String,
    "userid":String,
    "prodid":String,
    "cartimage":String,
    "cartcat":String,
    "cartname":String,
    "cartqty":Number,
    "cartprice":Number
    
})
let cartmodel=mongoose.model("cartdata",cartsch)
module.exports=cartmodel