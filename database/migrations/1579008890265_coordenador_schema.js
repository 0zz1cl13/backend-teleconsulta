'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoordenadorSchema extends Schema {
  up () {
    this.create('coordenadors', (table) => {
      table.increments()
      table.string('nome', 254).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('cpf', 11).notNullable().unique()
      table.string('contato', 16).notNullable()
      table.string('password', 60).notNullable()
      table.string('data_nascimento').notNullable()
      table.string('formacao', 50).notNullable()
      table.string('cidade', 50).notNullable()
      table.string('instituicao', 254)
      table.string('unidade', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('coordenadors')
  }
}

module.exports = CoordenadorSchema
