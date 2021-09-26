const express = require('express')

// const bodyParser = require('body-parser')
const app = express()

//Set Body-parser 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Importing dataBase connection 
const conn = require('./dataBase/conn')

//Rotas das categorias
const categoriesControler = require('./categories/CategoriesControler')
app.use('/categories', categoriesControler)
//Model Categorias
const categoriesModel = require('./categories/CategorieModel')

//Rotas dos artigos 
const  articlesController = require('./articles/ArticlesController')
app.use('/articles', articlesController)
//Model Articles 
const articlesModel = require('./articles/ArticleModel')

//Set view engine 
app.set('view engine', 'ejs')

//Set Static files 
app.set(express.static('public'))

//Main route
app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(3000, (err)=>{
    if(err){
        console.log('Warning!!! Server not run!')
    }else{
        console.log('Success! Server run at : 3000')
    }
})

