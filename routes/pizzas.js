const {Router} = require("express")
const router = Router()
const Pizza = require('../models/Pizza')
const createPizza = require('../controllers/Pizza')
const deletePizza = require("../controllers/Pizza");
const {updatePizza, displayPizzas} = require("../controllers/Pizza");
const pizzas = [
    {
        id: '1',
        name:'reine',
        price:'12'
    },
    {
        id:'2',
        name:'margherita',
        price:'13'
    },
    {
        id:'3',
        name:'fromage',
        price:'14'
    }

]


//router.get('/:id',(req, res)=>{
  //  let {id} = req.params
    //let pizza = pizzas.find(pizza => pizza.id == id)
    //console.log(pizza)
    //res.send(pizza)
//})

//router.post('/add', (req, res)=>{

 //let { ...pizzaParams} = req.body

   // let newPizza = Pizza.create({...pizzaParams})


    //res.sendStatus(201)
//})
router.get('/', displayPizzas)

router.post('/add', createPizza.createPizza)

router.delete('/delete/:id', deletePizza.deletePizza)

router.put('/modify/:name', updatePizza)

module.exports = router