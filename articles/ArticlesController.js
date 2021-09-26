const express = require('express')
const router = express.Router()

router.get('/list', (req, res)=>{
    res.send('Route to list all articles')
})

router.get('/new', (req, res)=>{
    res.send('Router to create a new article')
})

module.exports = router