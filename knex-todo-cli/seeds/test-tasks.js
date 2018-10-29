
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'tell cliff he is pretty'},
        {id: 2, task: 'tell ross he is smart'},
        {id: 3, task: 'tell robbie he is wise'}
      ]);
    });
};
