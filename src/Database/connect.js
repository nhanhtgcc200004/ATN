const {Pool} = require('pg');
try{
    module.exports = new Pool({
        connectionString: '\n' +
            '',
        ssl: {
            rejectUnauthorized: false
        }
    });
    console.log('Connect database success')
}catch (error){
    console.log('Connect database fail!')
}