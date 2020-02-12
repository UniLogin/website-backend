exports.up = async (knex) => {
  await knex.schema.createTable('emails', (table) => {
    table.increments();
    table.string('email').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('emails');
};
