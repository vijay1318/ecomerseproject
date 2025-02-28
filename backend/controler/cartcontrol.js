let cartmodel = require("../Model/cartmodel")
let {v4}=require("uuid")
const { findByIdAndDelete } = require("../Model/usermodel")

let cartdata=async(req,res)=>{
    try{

        let data=await cartmodel.find({"userid":req.body.userid,"prodid":req.body.prodid})
        if(data.length>0){
            await cartmodel.findByIdAndUpdate({"_id":data[0]._id},{$inc:{"cartqty":1}})
            
        }
        else{
            let obj=new cartmodel({...req.body,"_id":v4()})
            await obj.save()
            let data=await cartmodel.find({"userid":req.body.userid})
            res.json({"msg":"data added into cart","cartlength":data.length})
        }

    }
    catch(err){
        res.json({"msg":"error in cart"})
    }
}

let getcart=async(req,res)=>{
    try{
        let data=await cartmodel.find({"userid":req.params.uid})
        if(data.length<1){
            res.json({"msg":"Your Cart was Empty"})
        }else{
        res.json(data)
        }
    }
    catch(err){
        res.json({"msg":"error in fetching"})
    }
}
let increment=async(req,res)=>{
    try{
        await cartmodel.findByIdAndUpdate({"_id":req.params.cid},{$inc:{cartqty:1}})
        res.json({"msg":"increment done"})
    }
    catch(err){
        res.json({"msg":"error in increment"})
    }
}
let decrement=async(req,res)=>{
    try{
        await cartmodel.findByIdAndUpdate({"_id":req.params.cid},{$inc:{cartqty:-1}})
        res.json({"msg":"decrement done"})
    }
    catch(err){
        res.json({"msg":"error in decrement"})
    }
}
let delectcart=async(req,res)=>{
    try{
        let data=await cartmodel.findByIdAndDelete({"_id":req.params.cid})
        let da=await cartmodel.find({"userid":data.userid})
        if(da.length>0){
            res.json({"msg":"delected","cartlength":da.length})}
        else{
            res.json({"msg":"delected","cartlength":0})
        }
    }
    catch(err){
        res.json({"msg":"error in deleting"})
    }
}


module.exports={cartdata,getcart,increment,decrement,delectcart}