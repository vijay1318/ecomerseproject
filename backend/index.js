let express=require("express")
let mongoose=require("mongoose");
let cors=require("cors")
const route = require("./route/route");
let bodyparser=require("body-parser")

mongoose.connect("mongodb://127.0.0.1:27017/ecomersedata").then(()=>{
    console.log("ok");    
})
let app=express()
app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use("/",route)
app.use("/image",express.static('./prodimages'))
app.listen(5000)