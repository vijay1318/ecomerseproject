let mongoose=require("mongoose")
let prodsch=new mongoose.Schema({
    "_id":String,
    "title":String,
    "price":String,
    "image":String,
    "description":String,
    "category":String,
    "comments":[]
})
let productmodel=mongoose.model("products",prodsch)
module.exports=productmodel