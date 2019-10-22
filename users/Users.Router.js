const express = require("express"); 

const Users  =require("./Users.Model.js");
const authenticate = require("../users-middleware/authenticate.js"); 

const db = require("../data/db-Config.js"); // for /api/users/:id/events endpoint

const router =  express.Router()

// It's working
router.get("/", authenticate, (req, res) => { // localhost:9000/api/users
    Users.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    })
})

// It's working 
router.get("/:id", authenticate, (req, res) => { // localhost:9000/api/users/:id
    const { id } =  req.params

    if(!id) {
        res.status(401).json({ error: "Bad Request"})
    } else {
        Users.findById(id)
        .then(usersId => {
            res.status(200).json(usersId)
        })
        .catch(error => {
            console.log(error) 
            res.status(500).json({error: "Internal server error"})
        })
    }
}) 

// It's working 
router.put("/:id", authenticate, (req, res) => {  // localhost:9000/api/users/:id 
    const body  =  req.body
    const { id } = req.params

    Users.findById(id)
    .then(user => {
        if(user) {
            Users.update(id, body)
            .then(updateUser => {
                res.status(200).json(updateUser)
            })
        } else {
            res.status(400).json({ error: "Bad Request"})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    })
})


// It's working 
router.delete("/:id", authenticate, (req, res) => {  // localhost:9000/api/users/:id 
    const { id } = req.params

    Users.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({ message: "user deleted" })
        } else {
            res.status(404).json({ error: "Could not find the user within given ID"})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    })
})

// Should be able to display user with event

router.get("/:id/events", authenticate, (req, res) => {  // localhost:9000/api/users/:id/events
    const { id } = req.params

    // db("users")
    // .where({ id })
    // .then(user => {
    //     res.status(200).json(user)
    // })
})

module.exports = router; 