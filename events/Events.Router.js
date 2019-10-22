const express = require("express"); 

const Events = require("./Events.Model.js")
const authentication = require("../users-middleware/authenticate.js"); 

const router = express.Router()

router.post("/:id", authentication, (req, res) => {  // localhost:9000/api/events/:id
    const body = req.body

    if(!body) {
        res.status(404).json({ error: "Bad Request" })
    } else {
        Events.add(body)
        .then(event => {
            res.status(200).json({ message: "event was created successfully", event })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Internal server error" })
        })
    } 
})

router.get("/", (req, res) => {  // localhost:9000/api/events

    Events.find()
    .then(event => {
     res.status(200).json(event)   
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    })
})

module.exports = router; 