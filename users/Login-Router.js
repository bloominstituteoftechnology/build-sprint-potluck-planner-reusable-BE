const express = require("express"); 
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 

const Users = require("./Users.Model.js");

const router = express.Router()

router.post("/", (req, res) => { // localhost: /api/login 

})

module.exports = router; 