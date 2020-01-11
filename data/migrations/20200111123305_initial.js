
exports.up = async function(knex) {
  await knex.schema.createTable('projects', (table) => {
      table.increments('id')
      table.string('name')
        .notNullable()
        .unique()
      table.text('description')
      table.boolean('completed').defaultTo(0)
  })

  await knex.schema.createTable('resources', (table) => {
    table.increments('id')
    table.string('name')
        .notNullable()
        .unique()
    table.string('description')

  })

  await knex.schema.createTable('tasks', (table) => {
    table.increments('id')
    table.string('description')    
    table.text('notes')    
    table.boolean('completed').defaultTo(0)
    table.integer('projects_id')
        .notNullable()
        .references('id')
        .inTable('projects')

  })
  await knex.schema.createTable('project_resources', (table) => {
    table.integer('projects_id')
        .notNullable()
        .references('id')
        .inTable('projects')
    table.integer('resources_id')
        .notNullable()
        .references('id')
        .inTable('resources')
    table.primary(['projects_id', 'resources_id'])
  })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projet_resources')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('projects')
};
