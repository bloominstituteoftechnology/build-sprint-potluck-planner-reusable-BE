
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("events").del()
    .then(function () {
      // Inserts seed entries
      return knex("events").insert([
        {id: 1, event_name: 'rowValue1', time: "2:00pm", location: "NYC Central Park", dates: "4-10-20", guests: "Kanye, Diana, Bill, Bruce", users_id: "1"},
      ]);
    });
};
