const express = require("express")
const app = express()
const pizzaRoutes = require('./routes/pizzas')
const burgerRoutes = require('./routes/burger')

const port = 3000
const mongoose =require('mongoose')

app.use(express.json())

app.use('/api/pizzas', pizzaRoutes)
app.use('/api/burgers', burgerRoutes)


mongoose
    .connect('mongodb://localhost:27017/foodtruck')
    .then(()=>{
        console.log('on est bien connectés')
    })
    .catch((err)=>console.log(err))









app.get('/coucou', (req, res)=>{
    res.send('coucou')
})

app.post('/cava', (req, res)=>{

    console.log('hello regarder ya ca :')
    console.log(req.body)
    res.send('good ta envoyer')

})

app.listen(port, ()=>{
    console.log("coucouu")
})