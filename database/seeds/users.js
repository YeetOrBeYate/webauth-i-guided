
exports.seed = function(knex) {
      return knex('users').insert([
        { username: 'Kyle', password: "pass", role_id: 3},
        { username: 'Joe', password: "pass", role_id: 3},
        { username: 'Michael', password: "pass", role_id: 3}
      ]);
};
