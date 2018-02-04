// const express= require('express')
// const mongoose = require('mongoose')
// const handlebars = require('express-handlebars')

const env = process.env.NODE_ENV || 'development' 

const config = require('./config/config')[env]
const database = require('./config/database')(config)


const app = express()

app.engine('.hbs', handlebars({  
    defaultLayout: 'main',
    extname: '.hbs'
    }))

app.set('view engine', '.hbs')

app.use(express.static('./static'))


app.get('/', (req,res)=>{
    res.render('home/index')
})

