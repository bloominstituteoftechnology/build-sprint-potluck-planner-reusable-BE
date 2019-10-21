const express = require("express"); 
const cors = require("cors"); 
const helmet = require("helmet")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

const register = require("./auth/Register-Router.js"); 
const users =  require("./users/Users.Router.js"); 

// server.use("/api/register", register)
// server.use("/api/login", login)

server.use("/api/auth", register)
server.use("/api/users", users)

server.get("/", (req, res) => {
    res.send("Server is working!!! :)")
})

module.exports = server;