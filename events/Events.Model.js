const db = require("../data/db-Config.js"); 

module.exports = {
    add, 
    findById,
    find  
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
    "food_items",
    "guests"
    )
    .first()
}