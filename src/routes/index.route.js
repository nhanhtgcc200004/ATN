const pageController=require("../app/Controller/PageController");
const proController=require("../app/Controller/ProductController");
const loginController =require("../app/Controller/loginController");
const authentication =require("../Middleware/authentication");
const registerController=require("../app/Controller/registerController");
function indexRoute(app){
    app.get("/",loginController.getLogin)
    app.use("/product",authentication.checkCookieAdmin,proController.proList )
    app.post("/", authentication.checkLogin)
    app.get("/register",registerController.register)
    app.post("/register",loginController.checkexist)
    // app.get("/home", authentication.checkCookieAdmin, proController);
}
module.exports=indexRoute