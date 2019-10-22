
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments()

        tbl.string("username", 255).notNullable().unique()
        tbl.string("password", 255).notNullable()
    })
    .createTable("events", tbl => {
      tbl.increments()

      tbl.string("event_name", 255).notNullable()
      tbl.string("time", 255).notNullable()
      tbl.string("location", 255).notNullable()
      tbl.string("dates", 255).notNullable()
      tbl.string("food_items").notNullable() 
      tbl.string("guests", 255).notNullable()
      tbl.integer("users_id")
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("events")
 .dropTableIfExists("users")
};
