let {v4}=require("uuid")
let multer=require("multer")
let fs = require("fs");
const prodmodel = require("../Model/productmodel");
const cartmodel = require("../Model/cartmodel");
const { log } = require("console");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./prodimages");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
      cb(null,file.fieldname+"-"+uniqueSuffix+"."+file.mimetype.split("/")[1]);
    },
  });

  
const upload = multer({ storage: storage })


let addprod = async(req, res)=>{
    try {
      if(!req.file){
        res.json({"msg":"select a file"})
      }
      let data = new prodmodel({ ...req.body, "prodimage":req.file.filename, "_id": v4() });
      await data.save();
      res.json({ msg: "prod added" });
    } 
    catch (err) {
      res.json({ msg: "error in adding prod" });
    }
  };
  


let getproddata=async(req,res)=>{
    try{
        let data=await prodmodel.find()
        res.json(data)
    }
    catch(err){
        res.json({"msg":"error in getting"})
    }
}

let addcom=async(req,res)=>{
  try{
    let obj={...req.body}
    delete obj["_id"]
    await prodmodel.findByIdAndUpdate({"_id":req.body._id},{$push:{"prodcom":obj}})
    let data=await prodmodel.findById({"_id":req.body._id})
    res.json(data)
    }
  catch(err){
    res.json({"msg":"error in adding comment"})
  }
}
let delprod=async(req,res)=>{
  try{
    let obj=await prodmodel.findByIdAndDelete({"_id":req.params.pid})
    fs.rm(`./prodimages/${obj.prodimage}`,()=>{})
    await cartmodel.deleteMany({"prodid":req.params.pid})
    res.json({"msg":"deleted"})
  }
  catch(err){
    res.json({"msg":"error in deleting"})
  }
}
let edit=async(req,res)=>{
  try{
    let data=await prodmodel.findByIdAndUpdate({"_id":req.body._id},req.body)
    let obj={"cartname":req.body.prodname,"cartprice":req.body.prodprice,"cartcat":req.body.prodcat,"cartimage":req.body.prodimage}
    await cartmodel.updateMany({"prodid":req.body._id},obj)
    res.json({"msg":"update done"})
  }
  catch(err){
    res.json({"msg":"error in editing"})
  }
}
let editimage=async(req,res)=>{
  try{
    await prodmodel.findByIdAndUpdate({"_id":req.body._id},{"prodimage":req.file.filename})
    console.log("ok");
    
    fs.rm(`./prodimages/${req.body.oldimage}`,()=>{})
    await cartmodel.updateMany({"prodid":req.body._id},{"cartimage":req.file.filename})
    res.json({"msg":"updated image"})
  }
  catch(err){
    res.json({"msg":"error in editimage"})
  }
}
module.exports={addprod,getproddata,upload,addcom,delprod,edit,editimage}