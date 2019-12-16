const bcrypt = require('bcryptjs');


exports.seed = function(knex) {
      return knex('users').insert([
        { username: 'Kyle', password: bcrypt.hashSync('pass', 8), role_id: 3},
        { username: 'Joe', password: bcrypt.hashSync('pass', 8), role_id: 3},
        { username: 'Michael', password: bcrypt.hashSync('pass', 8), role_id: 3}
      ]);
};
