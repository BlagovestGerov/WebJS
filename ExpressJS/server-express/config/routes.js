module.exports = app =>{
    app.get('/', (req,res)=>{
        res.render('home/index')
    })
    app.all('*', (req,res)=>{
        res.status(404)
        res.send('404 NOT Found')
        res.end()
    })
}