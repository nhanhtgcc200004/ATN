const pageController=require("../app/Controller/PageController");
function indexRoute(app){
    app.use("/",pageController.home );
}
module.exports=indexRoute