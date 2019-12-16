
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('roles').insert([
        { name: 'Admin'},
        { name: 'TL'},
        { name: 'Student'}
      ]);
    
};
