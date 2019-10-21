const express = require("express"); 

const Users  =require("./Users.Model.js");
const authenticate = require("../users-middleware/authenticate.js"); 

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
router.get("/:id", (req, res) => { // localhost:9000/api/users/:id
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

router.put("/:id", (req, res) => {  // localhost:9000/api/users/:id 
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
router.delete("/:id", (req, res) => {  // localhost:9000/api/users/:id 
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

module.exports = router; 