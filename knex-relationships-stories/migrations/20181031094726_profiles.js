
exports.up = function(knex, Promise) {
    return knex.schema.createTable('profiles', (table) => {
        table.integer('user_Id')
        table.string('url')
        table.string('img_url')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
