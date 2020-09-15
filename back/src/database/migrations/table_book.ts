import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('book', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('author').notNullable();
        table.integer('year').notNullable();
        table.string('genre').notNullable();
        table.string('publisher').notNullable();
        table.integer('page').notNullable();
        table.string('status').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('book');
}