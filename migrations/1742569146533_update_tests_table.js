exports.up = function(knex) {
  return knex.schema.table('tests', function(table) {
    table.increments('id').primary().alter();
    table.datetime('created_at').defaultTo(knex.fn.now()).alter();
    table.datetime('updated_at').defaultTo(knex.fn.now()).alter();
  });
};

exports.down = function(knex) {
  return knex.schema.table('tests', function(table) {
    table.dropColumn('id');
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  });
};