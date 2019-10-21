const express = require("express"); 

const Users  =require("./Users.Model.js");
const authenticate = require("../users-middleware/authenticate.js"); 

const router =  express.Router()

router.get("/", (req, res) => {
    Users.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    })
})

module.exports = router; 