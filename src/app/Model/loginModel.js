const database = require('../../Database/connect')

class LoginModel{
    userLogin(username, password){

        const checkPass = async () => {
            let result = await database.query(`select * from accont`)
            return result.rowCount
        }

        return checkPass()
    }
}

module.exports = new LoginModel