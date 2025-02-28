const usermodel = require("../Model/usermodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
const cartmodel = require("../Model/cartmodel")

let register=async(req,res)=>{
    try{
        let data=await usermodel.findById({"_id":req.body._id})
        if(data){
            res.json({"msg":"you have an account"})
        }
        else{
            let hash=await bcrypt.hash(req.body.password,10)
            let obj=new usermodel({...req.body,"password":hash})
            await obj.save()
            res.json({"msg":"reg done"})
        }
    }
    catch(err){
        res.json({"msg":"error in registration"})
    }
}
let login=async(req,res)=>{
    try{
        let data=await usermodel.findById({"_id":req.body._id})
        if (data){
            let f=await bcrypt.compare(req.body.password,data.password)            
            if(f){
                let obj=await cartmodel.find({"userid":data._id})
                res.json({"token":jwt.sign({"_id":data._id},"vijay"),"_id":data._id,"name":data.name,"role":data.role,"cartlength":obj.length})
            }
            else{
                res.json({"msg":"check password"})
            }
        
        }
        else{
            res.json({"msg":"check email for login"})
        }
    }
    catch(err){
        console.log(err);
        
        res.json({"msg":"error in login"})
    }
}

let islogin=async(req,res,next)=>{
    try{
        await jwt.verify(req.headers.authorization,"vijay")
        next()
    }
    catch(err){
        res.json({"msg":"plz login"})
    }
}
let isadmin=async(req,res,next)=>{
    try{
        let data=await usermodel.findById({"_id":req.headers.uid})
        if(data&&data.role=="admin"){
            next()
        }
        else{
            res.json({"msg":"you are not a admin"})
        }
    }
    catch(err){
        res.json({"msg":"error in admin"})
    }
}
module.exports={register,login,islogin,isadmin}