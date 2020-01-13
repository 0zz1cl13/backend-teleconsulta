'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdministrativoSchema extends Schema {
  up () {
    this.create('administrativos', (table) => {
      table.increments()
      table.string('nome', 254).notNullable()
      table.string('cpf', 11).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('contato', 16).notNullable()
      table.string('unidade', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('administrativos')
  }
}

module.exports = AdministrativoSchema
