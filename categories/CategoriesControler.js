const express = require('express')
const CategorieModel =  require('./CategorieModel')
const slugify = require('slugify')
const router = express.Router()

//router to see a form wich create a new category 
router.get('/new', (req, res)=>{
    res.render('../views/admin/categories/newCategory')
})

//router of recive the datas of the form of view newCategory
router.post('/save', (req, res)=>{

    var title = req.body.tlt;

    if(title != undefined){
        CategorieModel.create({
            title: title,
            slug: slugify(title) 
        })
        .then(()=>{
            res.redirect('/articles/list')
        })
    }else{
            res.redirect('/')
    }
})

router.get('/list', (req, res)=>{
    res.send('Route to list all categories')
})

module.exports = router