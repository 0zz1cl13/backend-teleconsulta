'use strict'

const Coordenador = use('App/Models/Coordenador')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with coordenadors
 */
class CoordenadorController {
  /**
   * Show a list of all coordenadors.
   * GET coordenadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const coordenadores = await Coordenador.all()

    return coordenadores
  }

  /**
   * Create/save a new coordenador.
   * POST coordenadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all()

    const coordenador = await Coordenador.create(data)

    return coordenador
  }

  /**
   * Display a single coordenador.
   * GET coordenadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const coordenador = await Coordenador.findOrFail(params.id)

    return coordenador
  }

  /**
   * Update coordenador details.
   * PUT or PATCH coordenadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const coordenador = await Coordenador.findOrFail(params.id)

    const data = request.only([
      'nome',
      'email',
      'cpf',
      'contato',
      'password',
      'data_nascimento',
      'formacao',
      'cidade',
      'instituicao',
      'unidade'
    ])

    coordenador.merge(data)

    await coordenador.save()

    return coordenador
  }

  /**
   * Delete a coordenador with id.
   * DELETE coordenadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const coordenador = await Coordenador.findOrFail(params.id)

    await coordenador.delete()
  }
}

module.exports = CoordenadorController
