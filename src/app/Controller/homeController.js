const adminModel = require('../Model/AdminModel')

class homeController{
    getHome(req,res){
        adminModel.getProForCust().then((result) => {
            res.render('homePage.ejs',{detail:false ,proList: result, isLogin:req.login})
        })

    }
    getDetail(req,res){
       let proId=req.params.id;
       adminModel.getDetail(proId).then((result)=>{
           res.render('homePage.ejs',{detail:true,product:result[0], isLogin:req.login})
       })
    }
    notFound(req, res){
        res.render('notFound.ejs')
    }

    custSearchPro(req, res){
        let proName = req.params.name
        adminModel.searchProForCust(proName).then((result) => {
            if(result.length !== 0){
                res.send({status:200, proList: result})
            } else {
                res.send({status:400, notification: "Not found product"})
            }
        })
    }

}
module.exports=new homeController