const pageController=require("../app/Controller/PageController");
const proController=require("../app/Controller/ProductController");
const loginController =require("../app/Controller/loginController");
const authentication =require("../Middleware/authentication");

function indexRoute(app){
    app.use("/product",authentication.checkCookieAdmin,proController.proList );
    app.get("/login",loginController.getLogin);
    app.post("/login", authentication.checkLogin);
    app.get("/home", authentication.checkCookieAdmin, proController.home);
}
module.exports=indexRoute