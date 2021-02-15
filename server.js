require ("dotenv").config();
const express = require("express")
const app = express();
app.set("view engine","ejs");

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/order",(req,res)=>{
    res.render("order",{publicKey:process.env.pkey})// key cannot be public
})


app.listen(3000,function(){
    console.log("app started at port 3000")
})

