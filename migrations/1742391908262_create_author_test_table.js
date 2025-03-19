exports.up = function(knex) {
  return knex.schema.createTable('author_test', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('nationality').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('author_test');
};