const express = require("express"); 
const cors = require("cors"); 
const helmet = require("helmet")

const server = express()


server.use(helmet())
server.use(cors())
server.use(express.json())

const register = require("./auth/Register-Router.js"); 
const users =  require("./users/Users.Router.js"); 
const events = require("./events/Events.Router.js"); 
const foods = require("./foods/Foods.Router.js"); 

server.use("/api/auth", register)
server.use("/api/users", users) 
server.use("/api/events", events)
server.use("/api/foods", foods)

server.get("/", (req, res) => {
    res.send("Server is working!!! :)")
})

module.exports = server;