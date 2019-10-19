const express = require("express"); 
const bcrypt = require("bcryptjs"); 

const Users = require("./Users.Model.js");

const router = express.Router()

router.post("/", (req, res) => { // localhost: /api/register
    const user = req.body

   const hash = bcrypt.hashSync(user.password, 8)
   user.password = hash

   if(!hash) {
       res.status(404).json({error: "Please enter the correct credentials" })
   } else {
       Users.add(user)
       .then(response => {
        res.status(200).json({ message: "New user created", response })
        }) 
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Internal Server Error (this is a backend issue)"})
        }) 
    }
})


    
    

module.exports = router; 



