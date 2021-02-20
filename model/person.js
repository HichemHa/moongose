const mongoose = require("mongoose");

const schema = mongoose.Schema;

const personSc = new schema({
    name:{
        type: String,
        required: true,
    },  
    age: Number,
    food:[],
})

module.exports = mongoose.model('person', personSc);