const express = require("express"); 
const bcrypt = require("bcryptjs"); 

const Users = require("./Users.Model.js");

const router = express.Router()

router.post("/", (req, res) => { // localhost: /api/register
    const user = req.body

    // Hash middleware 
    
})



