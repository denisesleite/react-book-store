import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('livros', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('autor').notNullable();
        table.integer('ano').notNullable();
        table.string('genero').notNullable();
        table.string('editora').notNullable();
        table.integer('paginas').notNullable();
        table.string('status').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('livros');
}