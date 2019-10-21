const db = require("../data/db-Config.js"); 

module.exports = {
    find, 
    add, 
    addId,
    findById
}

function add(user) { // register 
    return db("users")
    .insert(user, "id")
    .then(ids => {
        return findById([ids]) 
    })
}

function addId(filter) { // login 
    return db("users")
    .first()
    .where(filter)
}

function find() {
    return db("users")
    .select("id", "username", "password", "email")
}


function findById(id) {
    return db("users")
    .where({ id }).first()
}