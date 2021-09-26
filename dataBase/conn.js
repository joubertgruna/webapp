const Seq = require('sequelize')
const conn = new Seq('db_api', 'root', '20IDEbrasil@20M',{
    host: '208.68.38.173',
    dialect: 'mysql'
})

conn.authenticate()
    .then(()=>{
        console.log('Success, dataBase is connected.')
    }).catch((error)=>{
        console.log(error)
    })

module.exports = conn
