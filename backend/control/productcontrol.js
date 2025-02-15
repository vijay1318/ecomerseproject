let {v4}=require("uuid")
let multer=require("multer")
const productmodel = require("../model/prodmodel")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })
let addproduct=async(req,res)=>{
    try{
        if (!req.file){
            return res.json({"msg":"select file"})
        }
        let data=new productmodel({...req.body,"image":req.file.filename,"_id":v4()})
        await data.save()
        res.json({"msg":"data added into products","data":req.file})
    }
    catch(err){
        console.log(err);
        
        res.json({"msg":"error in adding product"})
    }
}

let getproducts=async(req,res)=>{
    try{
        let data=await productmodel.find()
        res.json(data)
    }
    catch(err){
        res.json({"msg":"error in getting"})
    }
}

module.exports={addproduct,getproducts,upload}