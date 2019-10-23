
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {id: 1, username: 'Jeff', password: "123", email: "j@j" },
        {id: 2, username: 'Alex',  password: "123", email: "a@a" },
      ]); 
    });
};
