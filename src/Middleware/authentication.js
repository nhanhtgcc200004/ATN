const jwt = require('jsonwebtoken')
const loginModel = require("../app/Model/loginModel");
const tokenKey = 'nhan123'
const tokenName = '__token'

class Authentication
{
    checkLogin(req, res)
    {
        let username = req.body.username
        let pass = req.body.password

        loginModel.userLogin(username, pass).then( (result) => {

            if (result.rowCount > 0)
            {
                res.cookie(tokenName,jwt.sign(
                    {
                        userId:result.rows[0].user_id,
                        shopId:result.rows[0].shop_id
                    },
                    tokenKey)
                )
                res.send({status:200, shopId:result.rows[0].shop_id})
            }
            else
            {
                res.send({status:400})
            }
        })
    }

    checkCookieAdmin(req, res, next)
    {
        try{
            let token = req.cookies.__token
            let decode = jwt.verify(token, tokenKey)
            req.userId = decode.userId
            req.shopId = decode.shopId
            if(req.shopId){
                next()
            } else {
                res.render('newShop.ejs')
            }
        }catch (error){
            res.render('authFail.ejs')
        }
    }

    handleCreateShop(req, res){
        console.log(req.body)
        let token = req.cookies.ath_token
        let decode = jwt.verify(token, tokenKey)
        req.userId = decode.userId

        let shopName = req.body.shopName
        let address = req.body.address
        const handle = async() => {
            const shop = await indexModel.addShop(shopName, address)
            if(shop.rowCount !== 0){
                let shopId = shop[0].shop_id
                const updateShopForAdmin = await indexModel.addShopForAdmin(shopId, req.userId)
                if(updateShopForAdmin.rowCount !== 0){
                    res.cookie(tokenName,jwt.sign(
                        {
                            userId: req.userId,
                            shopId: shopId
                        },
                        tokenKey)
                    )
                    res.send({status:200, mess: 'create shop success'})
                } else {
                    console.log('fail')
                    res.send({status:200, mess: 'create shop fail'})
                }
            } else {

                res.send({status:200, mess: 'create shop fail'})
            }
        }
        handle()
    }
}

module.exports = new Authentication