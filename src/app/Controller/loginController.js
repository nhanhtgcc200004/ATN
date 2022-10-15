const loginModel  = require('../Model/loginModel')
const registerModel=require('../Model/registerModel')
const database = require("../../Database/connect");
class LoginController{
    getLogin(req,res){
        res.render('login.ejs')
    }

    handleLogin(req, res){
      let username = req.body.username
      let password = req.body.password

      loginModel.userLogin(username, password).then((result) =>{
          if(result !== 0){
              res.render()
          }
      })
    }
    checkexist(req, res){
        let user=req.body.username
        registerModel.register(user).then((result) =>{
            if(result.rowCount===0){
                res.send({status:200})
                alert("sign up success")
                location.href('/')
            }
        })
    }
}
module.exports=new LoginController