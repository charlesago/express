const Pizza = require("../models/Pizza");

const createPizza = async function create(req, res){

    let { ...pizzaParams} = req.body

    let newPizza = await Pizza.create({...pizzaParams})
    res.sendStatus(201)
}
async function displayPizzas(req, res){
    res.send(await Pizza.find({}))
}
const deletePizza = async function remove(req, res, ){
    let {...pizzaParams} = req.body
    await Pizza.findOneAndDelete({...pizzaParams})
    res.send("OK")
}
async function updatePizza(req, res){
    let { ...pizzaToUpdate } = req.params
    let {...pizzaParams} = req.body
    await Pizza.findOneAndUpdate({...pizzaToUpdate}, {...pizzaParams})
    res.send("MODIFY OK")
}
module.exports = {createPizza, displayPizzas, deletePizza, updatePizza}