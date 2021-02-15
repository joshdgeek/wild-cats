module.exports.mailer =(req,res)=>{
    let transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"",
            pass:""
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    let mailOption = {
        from:"",
        to:"",
        subject:"",
        text:""
    }

    transport.sendMail(mailOption,function(err,success){
        if(err){
            console.log("not sent")
            res.json({status:"not sent"})
        }else{
            console.log("success");
            res.json({success:"email not sent"})
        }

    })
}