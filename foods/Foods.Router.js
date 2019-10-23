const express = require("express"); 

const Foods = require("./Foods.model.js");
const authentication = require("../users-middleware/authenticate.js"); 

const db = require("../data/db-Config.js"); // for /api/users/:id/events endpoint


const router = express.Router()

// It's working 
router.post("/", authentication, (req, res) => {  // localhost:9000/api/foods
    const body = req.body

    if(!body) {
        res.status(404).json({ error: "Bad Request" })
    } else {
        Foods.add(body)
        .then(event => {
            res.status(200).json({ message: "event was created successfully", event })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Internal server error" })
        })
    } 
})

// It's working 
router.get("/", authentication, (req, res) => {  // localhost:9000/api/foods

    Foods.find()
    .then(event => {
     res.status(200).json(event)   
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    })
})

// It's working 
router.put("/:id", authentication, (req, res) => { // localhost:9000/api/foods/:id
    const { id } = req.params
    const body = req.body

    if(!id && !body) {
        res.status(404).json({ error: "Bad Request" })
    } else {
        Foods.update(id, body)
        .then(event => {
            res.status(200).json(event)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: "Internal server error" })
        })
    }
})

// It's working
router.delete("/:id", authentication, (req, res) => { // localhost:9000/api/foods/:id
    const { id } = req.params
    
    Foods.remove(id)
    .then(deleted => {
        if(deleted) {
            res.status(200).json({ message: "event deleted successfully" })
        } else {
            res.status(404).json({ error: "Bad request" })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    })
})

router.get("/:id/events", authentication, (req, res) => {  // localhost:9000/api/foods/:id/events
    const { id } = req.params

    db("events") 
    .where({ id })
    .then(user => {
        db("foods")
        .where({ events_id: id })
        .then(food => {
            res.status(200).json({...user[0], food})
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: "Internal server error one" })    
        })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "Internal server error two" })
    })
})

module.exports = router; 