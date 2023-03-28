const express = require('express');
const app = express();

const listen = app.listen(3000, (err)=>{
    if(err){
        console.log('Warning!!! Server not run!')
    }else{
        console.log('Success! Server run at : 3000')
    }
})

module.exports = listen