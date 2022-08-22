const model = require("../models/registracemodel")

exports.registrace = (req,res)=>{
    
    res.render("registrace")

}

exports.registrovani = (req,res)=>{
    //console.log(req)
 if(model.jevdatabazi(req.body.jmeno)==false)
    model.vytvoruzivatele(req.body.jmeno, req.body.heslo)
    res.redirect("/")
}