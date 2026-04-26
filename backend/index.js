const express=require("express")
const cors=require("cors")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

var uemail="nikethaa@gmail.com"
var upass="3246757"

app.post("/login",function(req,res){
    let email=req.body.email
    let password=req.body.password
    var arr=[email]

    if(email===uemail && Number(password)==upass){
        res.send(true)
        console.log(arr)

    }
    else{
        res.send(false)
    }
    
})

app.listen(5000,function(){
    console.log("server started...")
})