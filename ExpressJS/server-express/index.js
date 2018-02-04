const express= require('express')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise 

const app = express()

app.get('/', (req,res)=>{
    res.send('Hello!')
})
mongoose.connect('mongodb://localhost:27017/server-express')
.then(()=>{
    console.log('Database ready!')
    app.listen(3000)
})
