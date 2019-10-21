const express = require("express")
const bcrypt = require("bcryptjs"); 

// import user model here 
const Users = require("../users/Users.Model.js");
const generateToken = require("../users-middleware/Token.js"); 

const router = express.Router()

// It's working 
router.post('/register', (req, res) => {
  // implement registration
  const user = req.body

  const hash = bcrypt.hashSync(user.password, 8)
  user.password = hash 

  if(!hash) {
      res.status(404).json({error: "Please enter the correct credentials"})
  } else {
      Users.add(user)
      .then(response => {
          res.status(200).json(response)
      })
      .catch(error => {
          console.log(error)
          res.status(500).json({error: "Internal Server Error"})
      })
  }
});

// It's working 
router.post('/login', (req, res) => {
  // implement login
  const { username } = req.body
  const { password } = req.body

  if(!username && !password) {
      res.status(401).json({ error: "Wrong password or username" })
  } else {
      Users.addId({ username })
      .first()
      .then(user => {
          if(user && bcrypt.compareSync(password, user.password)) {
              const token = generateToken(user)
              
              res.status(200).json({ message: `Welcome ${user.username}!!`, token })  
          } else {
              res.status(400).json({ error: "please provide credentials"})
          }
      })
      .catch(error => {
          console.log(error)
          res.status(500).json({ error: "Internal Server Error"})
      })
  }
});

// For Hash 
router.get("/hash", (req, res) => {
  const password = req.headers.authorization

  if(password) {
    const hash = bcrypt.hashSync(password, 10)
    res.status(200).json({ hash })
  } else {
    res.status(400).json({ error: "Please provide credentials" })
  }
})

module.exports = router;




