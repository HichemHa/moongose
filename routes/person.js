const { query } = require("express");
const express = require("express");
const { update } = require("../model/person");
const router = express.Router();
const persons = require("../model/person");

//create new persons
router.post('/', (req, res) => {
    const newpersons = new persons({ ...req.body });
    newpersons
        .save()
        .then((person) => res.status(200).json(person))
        .catch((err) => res.send(err));
    
})
//get all data
router.get('/', (req, res) => {
    persons.find()
        .then((person) => res.send(person))
    .catch((error)=>res.send(error))
})

//find one bye foodfavorite 
router.get('/favfood/:food', (req, res) => {
    let food = req.params.food;
        persons.findOne({food})
        .then((person) => res.send(person))
    .catch((error)=>res.send(error))
}) 



//findbyID

router.get('/:_id', (req, res) => {
    let _id = req.params._id;
        persons.findById({_id})
        .then((person) => res.send(person))
    .catch((error)=>res.send(error))
}) 

//find by name
router.get('/name/:name', (req, res) => {
    let name = req.params.name;
    persons.find({ name } )
        .then((person) => res.send(person))
    .catch((error)=>res.send(error))
}) 



//FindEditAndSave
router.put('/edit/:_id', (req, res) => {
    let _id  = req.params._id;

    persons.findByIdAndUpdate({ _id }, { $set: {...req.body } })
        .then((person) => res.send(person))
        .catch((err) => res.send(err))    
})


//model.findOneAndUpdate()
router.put('/editage/:name', (req, res) => {
    let name  = req.params.name;

    persons.findOneAndUpdate({name},  { $set: {...req.body} })
        .then((person) => res.send(person))
        .catch((err) => res.send(err))    
})
//findByIdAndRemove
router.delete('/delete/:_id', (req, res) => {
    let _id  = req.params._id;

    persons.findByIdAndDelete({_id})
        .then((person) => res.send(person))
        .catch((err) => res.send(err))    
})
//deleteMany 
router.delete('/deletmany/:name', (req, res) => {
    let name = req.params.name;
    persons.deleteMany({"name":name}).then((person)=>res.send(person)).catch((err)=>res.send(err))

})

//Chain Search Query Helpers to Narrow Search Results
router.get('/last/:food', (req, res) => {

    let food = req.params.food;
    persons.find({ food }).sort({ name: 1 }).limit(2).select({ name: 1, food: 1 }).exec()
        .then((person) => res.send(person))
        .catch((error) => res.send(error))
})

module.exports = router;