const express = require("express"); 
const bcrypt = require("bcryptjs"); 

const Users = require("./Users.Model.js");
const token = require("../users-middleware/Token.js"); 

const router = express.Router()

router.post("/", token, (req, res) => { // localhost: /api/login 
    const username = req.body.username
    const password = req.body.password

    if(!username && !password) {
        res.status(400).json({error: "Bad Request"})
    } else {
        Users.addId({ username })
        .then(response => {
            if(response && bcrypt.compareSync(password, response.password)){
                const token = generateToken(response)

                res.status(200).json({ message: `Welcome ${response.username}`, token})
            } else {
                res.status(400).json({error: "Bad request"})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Internal Server Error"})
        })
    }
})

module.exports = router; 