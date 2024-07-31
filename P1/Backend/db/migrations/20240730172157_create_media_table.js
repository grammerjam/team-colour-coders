exports.up = function(knex) {
  return knex.schema.createTable('media', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('url').notNullable();
    table.json('thumbnails'); // Store thumbnails as JSON
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('media');
};
