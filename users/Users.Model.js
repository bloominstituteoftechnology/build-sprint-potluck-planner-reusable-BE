const db = require("../data/db-Config.js"); 

module.exports = {
    find, 
    add, 
    findById
}

function find() {
    return db("users")
    .select("id", "username", "password")
}

function add(user) {
    return db("users")
    .insert(user, "id")
    .then(ids => {
        return findById([ids]) 
    })

}

function findById(id) {
    return db("users")
    .where({ id }).first()
}