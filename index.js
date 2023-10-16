const express = require("express")
const app = express()
const session = require("express-session");
const port = 3001

const mongodbSession = require("connect-mongodb-session")(session);
const mongoose = require('mongoose')


const userRoutes = require('./routes/session')
const burgerRoutes = require('./routes/burger')

const mongodbUri = "mongodb://localhost:27017/foodtruck";
mongoose.connect(mongodbUri, {useNewUrlParser: true})
    .then(()=>{
        console.log('connecté')
    })
    .catch((err)=>console.log(err))

const store = new mongodbSession({
    uri: mongodbUri,
    collection: 'sessions'
})


const isAuth = (req,res,next)=>{
    if(req.session.isAuth){
        next()
    }else{
        res.send('connecté? nope')
    }
}
// initialisation, set start session
app.use(session({
    secret: 'a key that is a string that will sign cookie',
    resave: false,
    saveUninitialized: false,
    store: store
}))
app.get('/', (req,res)=>{
    req.session.isAuth =  true
    res.send("session ok")
})


app.use(express.json()) // deseraliser
app.use('/api/burger', isAuth, burgerRoutes)
app.use('/api/user', userRoutes)

app.listen(port,()=>{
    console.log("youhou")
})