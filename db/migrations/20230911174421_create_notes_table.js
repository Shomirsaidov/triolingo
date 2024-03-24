/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('notes', function (table) {
        table.increments('id').primary().unique(); // Автоинкрементируемое поле ID
        table.string('title'); // Строковое поле для заголовка заметки
        table.text('content').defaultTo('No content...'); // Текстовое поле для содержания заметки
        table.timestamps(true, true); // Поля для даты создания и обновления записи
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('notes'); 
};
