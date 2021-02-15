const express = require("express")
const app = express();
app.set("view engine","ejs");

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/order",(req,res)=>{
    res.render("order",{publicKey:"pk_test_e09a638efc62a875b398d315906c240ca0225caa"})// key cannot be public
})


app.listen(3000,function(){
    console.log("app started at port 3000")
})

