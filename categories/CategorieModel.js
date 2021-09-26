const sequelize = require('sequelize')
const conn = require('../dataBase/conn')

const Categories = conn.define('categories',{
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false
    }
})

// Categories.toMany()
//Categories.sync({force: true}) Method used to create a table when the aplication will be started, cause this the line it's coment
module.exports = Categories