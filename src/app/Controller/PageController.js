class PageController{
    home(req,res){
        res.render("Home.ejs")
    }
}
module.exports=new PageController