const express = require("express"); 
const bcrypt = require("bcryptjs"); 


router.get("/hash", (req, res) => {
    const password = req.headers.authorization

    if(password) {
        const hash =  bcrypt.hashSync(password, 8)
        res.status(200).json({ hash })
    } else {
        res.status(400).json({ error: "Please provide credentials" })
    }
})