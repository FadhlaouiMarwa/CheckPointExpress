//importation 

const express=require("express")
const path=require("path")
const app=express()
const myapp=require("./middleware/Auth")

//middleware express

app.use (myapp)

//express Route
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/acceuil.html"))
    
})
app.get("/Contactez-Nous",(req,res)=>{
    res.sendFile(path.join(__dirname+"/contact.html"))
    
})
app.get("/Nos-services",(req,res)=>{
    res.sendFile(path.join(__dirname+"/service.html"))
    
})
//creation of server

const port=5000;
app.listen(port,(error)=>{
    error?console.log(error)
    :console.log(`the server is running on port : ${port}`)
});
