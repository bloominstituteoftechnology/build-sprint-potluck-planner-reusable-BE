const express = require("express"); 

const Users  =require("./Users.Model.js");
const authenticate = require("../users-middleware/authenticate.js"); 

const router =  express.Router()

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


module.exports = router; 