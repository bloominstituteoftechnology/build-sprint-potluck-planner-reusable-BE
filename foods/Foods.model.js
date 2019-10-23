const db = require("../data/db-Config.js"); 

module.exports = {
    add, 
    findById,
    find, 
    update, 
    remove
}
 
function add(event) { // register 
    return db("foods")
    .insert(event, "id")
    .then(ids => {
        return findById([ids]) 
    })
}

function findById(id) {
    return db("foods")
    .where({ id })
    .first()
}

function find() {
    return db("foods")
    .select("id", "food_item")
}

function update(id, change) {
    return db("foods")
    .where({ id })
    .first()
    .update(change)
}

function remove(id) {
    return db("foods")
    .where({ id })
    .first()
    .delete()
}
