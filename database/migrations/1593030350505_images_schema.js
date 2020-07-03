'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagesSchema extends Schema {
  up() {
    this.create('images', table => {
      table.increments()
      table
        .integer('coordenador_id')
        .unsigned()
        .references('id')
        .inTable('coordenadors')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.string('classifier')
      table.timestamps()
    })
  }

  down() {
    this.drop('images')
  }
}

module.exports = ImagesSchema
