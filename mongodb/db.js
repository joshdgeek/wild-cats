
    var mongoose  = require("mongoose")
   
    mongoose.connect("mongodb://localhost:27017/mytodo",{ useNewUrlParser: true },{ useUnifiedTopology: true })
    let loginSchema =  new mongoose.Schema({
        user:String,
        pass: String
    })
    let login = mongoose.model("login", loginSchema)
 //   console.log("databse created")

module.exports = login