const db = require("../data/db-Config.js"); 

module.exports = {
    find, 
    add, 
    addId,
    findById
}

function add(user) {
    return db("users")
    .insert(user, "id")
    .then(ids => {
        return findById([ids]) 
    })
}

function addId(filter) {
    return db("users")
    .where(filter).first()
}

function find() {
    return db("users")
    .select("id", "username", "password")
}


function findById(id) {
    return db("users")
    .where({ id }).first()
}