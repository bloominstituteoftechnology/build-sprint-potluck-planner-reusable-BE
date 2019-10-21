const jwt = require("jsonwebtoken"); 
const secrets = require("../secrets.js"); 

function generateToken(users) {
    const payload = {
        username: users.username,
        subject: users.id,
    }
    const options = {
        expiresIn: "4d"
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = generateToken; 