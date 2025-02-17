let userm = require("../model/model")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
let userdata=async(req,res)=>{
    try{
        let data=await userm.findById({"_id":req.body._id})
        if (data){
            res.json({"msg":"acount exist"})
        }
        else{
            let ps=await bcrypt.hash(req.body.pwd,10)
            let data=new userm({...req.body,"pwd":ps})
            await data.save()
            res.json({"msg":"reg done"})
        }
    }catch(err){
        console.log(err);
        
        res.json({"msg":"error in registration"})
    }
}

let userlogin=async(req,res)=>{
    try{
        let data=await userm.findById({"_id":req.body._id})
        if(data){
            let f=await bcrypt.compare(req.body.pwd,data.pwd)
            if(f){
                res.json({"token":jwt.sign({"_id":data._id},"vijay"),"_id":data._id,"name":data.name,"role":data.role})
            }
            else{
                res.json({"msg":"check password"})
            }
        }
        else{
            res.json({"msg":"check email"})
        }
    }catch(err){
        res.json({"msg":err})
    }
}
module.exports={userdata,userlogin}