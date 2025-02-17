let {v4}=require("uuid")
const cartmodel = require("../model/catrmodel")

let addcart=async(req,res)=>{
    try{
        let result=await cartmodel.find({"userid":req.body.userid,"prodid":req.body.prodid})
        if(result.length>0){
            res.json({"msg":"prod already exist"})
        }
        else{
            let  data=new cartmodel({...req.body,"_id":v4()})
            await data.save()
            res.json({"msg":"product added into cart"})
        }
    }
    catch(err){
        res.json({"msg":"error in adding"})
    }
}
let getcart=async(req,res)=>{
    try{
        let data=await cartmodel.find()
        res.json(data)
    }catch(err){
        res.json({"msg":"error in getting "})
    }
}
module.exports={addcart,getcart}
