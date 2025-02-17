let mongoose=require("mongoose")
let cartschema=new mongoose.Schema({
    "_id":String,
    "userid":String,
    "prodid":String,
    "prodname":String,
    "prodprice":String,
    "prodimage":String,
    "prodqty":Number 
})
let cartmodel=mongoose.model("card",cartschema)
module.exports=cartmodel