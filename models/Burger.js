const mongoose =require('mongoose')

const BurgerSchema = new mongoose.Schema({

    name:{
        type: mongoose.SchemaTypes.String
    },
    ingredient:{
        type: mongoose.SchemaTypes.String
    },
    price: {
        type : mongoose.SchemaTypes.String
    }
})

module.exports = mongoose.model('burger', BurgerSchema)