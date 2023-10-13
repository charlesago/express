const {Router} = require("express")
const router = Router()
const Burger = require('../models/Burger')
const createBurger = require('../controllers/Burger')
const deleteBurger = require("../controllers/Burger");
const {updateBurger, displayBurger} = require("../controllers/Burger");
const burger = [
    {
        id: '1',
        name:'bacon',
        price:'18'
    },
    {
        id:'2',
        name:'fromage',
        price:'20'
    },

]

router.get('/', displayBurger)

router.post('/add', createBurger.createBurger)

router.delete('/delete/:id', deleteBurger.deleteBurger)

router.put('/modify/:name', updateBurger)

module.exports = router