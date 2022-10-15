const loginModel  = require('../Model/loginModel')
const database = require("../../Database/connect");
class LoginController{
    getLogin(res){
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
        database.query(`select * from accont`).then()
    }
}
module.exports=new LoginController