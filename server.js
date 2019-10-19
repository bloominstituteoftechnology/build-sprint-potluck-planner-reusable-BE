const express = require("express"); 
const cors = require("cors"); 
const helmet = require("helmet")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

const register = require("./users/Register-Router.js"); 
const login = require("./users/Login-Router.js"); 

server.use("/api/register", register)
server.use("/api/login", login)

server.get("/", (req, res) => {
    res.send("Server is working!!! :)")
})

module.exports = server;