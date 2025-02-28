let mongoose=require("mongoose")
let prodsch=new mongoose.Schema({
    "_id":String,
    "prodname":String,
    "prodcat":String,
    "prodprice":Number,
    "proddesc":String,
    "prodimage":String,
    "prodcom":[{"name":String,"text":String,"rt":Number}]

})
let prodmodel=mongoose.model("proddata",prodsch)
module.exports=prodmodel