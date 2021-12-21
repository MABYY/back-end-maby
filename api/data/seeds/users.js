
exports.seed = function(knex) {
  return knex('users').truncate() //reset primary keys
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Maby', password: 1234},
        {username: 'Mark', password: 1234},
        {username: 'Tony', password: 1234}
      ]);
    });
};
