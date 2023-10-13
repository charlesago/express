const Burger = require("../models/Burger");

const createBurger = async function create(req, res){

    let { ...burgerParams} = req.body

    let newBurger = await Burger.create({...burgerParams})
    res.sendStatus(201)
}
async function displayBurger(req, res){
    res.send(await Burger.find({}))
}
const deleteBurger = async function remove(req, res, ){
    let {...burgerParams} = req.body
    await Burger.findOneAndDelete({...burgerParams})
    res.send("OK")
}
async function updateBurger(req, res){
    let { ...burgerToUpdate } = req.params
    let {...burgerParams} = req.body
    await Burger.findOneAndUpdate({...burgerToUpdate}, {...burgerParams})
    res.send("MODIFY OK")
}
module.exports = {createBurger, displayBurger, deleteBurger, updateBurger}