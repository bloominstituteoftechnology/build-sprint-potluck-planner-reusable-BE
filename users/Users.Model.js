const db = require("../data/db-Config.js"); 

module.exports = {
    find, 
    add, 
    addId,
    findById, 
    update, 
    remove
}

function add(user) { // register 
    return db("users")
    .insert(user, "id", "email") // aded email so when registering new user most input email 
    .then(ids => {
        return findById([ids]) 
    })
}

function addId(filter) { // login / users does not need to into email when login in 
    return db("users")
    .first()
    .where(filter)
}

function find() {
    return db("users")
    .select("id", "username", "password", "email") // should display username password with token and email
}


function findById(id) {
    return db("users")
    .where({ id }).first()
}

function update(id, change) {
    return db("users")
    .where({ id })
    .first()
    .update(change)
}

function remove(id) {
    return db("users")
    .where({ id })
    .first()
    .delete()
}