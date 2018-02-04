const express = require('express')
const handlebars = require('express-handlebars')


module.exports = app =>{

    app.engine('.hbs', handlebars({  
        defaultLayout: 'main',
        extname: '.hbs'
        }))

    app.set('view engine', '.hbs')

    app.use(express.static('./static'))


    app.get('/', (req,res)=>{
        res.render('home/index')
    })
}