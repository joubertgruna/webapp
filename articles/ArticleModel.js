const sequelize = require('sequelize')
const conn = require('../dataBase/conn')
const Category = require('../categories/CategorieModel')

const Articles = conn.define('articles',{
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false
    },
    body: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

//Relation : 1 by 1 - 1 Article belongs to the 1 Catgerory || belongsTo() == perteceA
Articles.belongsTo(Category)

//Relation : 1 by M - 1 Category has Many Articles || hasMany() == temMuitos
Category.hasMany(Articles)

// Articles.sync({force: true}) Method used to create a table when the aplication to be staterd, is be cause this of line is coment 
module.exports = Articles