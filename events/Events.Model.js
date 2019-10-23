const db = require("../data/db-Config.js"); 

module.exports = {
    add, 
    findById,
    find, 
    update, 
    remove
}
 
function add(event) { // register 
    return db("events")
    .insert(event, "id")
    .then(ids => {
        return findById([ids]) 
    })
}

function findById(id) {
    return db("events")
    .where({ id })
    .first()
}

function find() {
    return db("events")
    .select(
    "id", 
    "event_name", 
    "time",
    "location",
    "dates",
    "guests",
    "users_id"
    )
}

function update(id, change) {
    return db("events")
    .where({ id })
    .first()
    .update(change)
}

function remove(id) {
    return db("events")
    .where({ id })
    .first()
    .delete()
}

