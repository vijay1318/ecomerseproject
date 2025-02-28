let express=require("express")
const { register, login, islogin, isadmin } = require("../controler/usercontroler")
const { upload, addprod, getproddata, addcom, delprod, edit, editimage } = require("../controler/prodcontrol")
const { cartdata, getcart, increment, decrement, delectcart } = require("../controler/cartcontrol")

let route=new express.Router()
route.post("/register",register)
route.post("/login",login)
route.post("/addprod",upload.single("prodimage"),islogin,isadmin,addprod)
route.get("/getproddata",getproddata)
route.post("/addcart",islogin,cartdata)
route.get("/getcart/:uid",islogin,getcart)
route.get("/inc/:cid",islogin,increment)
route.get("/dec/:cid",islogin,decrement)
route.delete("/del/:cid",islogin,delectcart)
route.put("/addcom",islogin,addcom)
route.delete("/dele/:pid",islogin,isadmin,delprod)
route.put("/edit",islogin,isadmin,edit)
route.put("/editimage",upload.single("prodimage"),islogin,isadmin,editimage)


module.exports=route