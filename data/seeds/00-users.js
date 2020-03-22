
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'darth vader', password: 'wimpy-luke' },
        { id: 2, username: 'darth sidus', password: 'death-start' },
        { id: 3, username: 'darth mal', password: 'damn-obi-wan' }
      ]);
    });
};
