
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {id: 1, username: 'Jeff', password: "123"},
        {id: 2, username: 'Alex',  password: "123"},
      ]); 
    });
};
