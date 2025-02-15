let express=require("express")
let mongoose=require("mongoose");
let bodyparser=require("body-parser")
const route = require("./route/rt");
let cors=require("cors")
mongoose.connect("mongodb://127.0.0.1:27017/ecomerse").then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("error");
    
})
let app=express()
app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({"extended":true}))  
app.use("/images",express.static("./my-uploads"))                                                                                                                                  
app.use("/",route)
app.listen(5000)
 