'use strict'

const Administrativo = use('App/Models/Administrativo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with administrativos
 */
class AdministrativoController {
  /**
   * Show a list of all administrativos.
   * GET administrativos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const admins = await Administrativo.all()

    return admins
  }

  /**
   * Render a form to be used for creating a new administrativo.
   * GET administrativos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async store ({ request, response, view }) {
    const data = request.all()

    const administrativo = await Administrativo.create(data)

    return administrativo
  }

  /**
   * Display a single administrativo.
   * GET administrativos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const administrativo = await Administrativo.findOrFail(params.id)

    return administrativo 
  }

  /**
   * Update administrativo details.
   * PUT or PATCH administrativos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const administrativo = await Administrativo.findOrFail(params.id)

    const data = request.only([
      'nome',
      'cpf',
      'email',
      'senha',
      'contato',
      'unidade'
    ])

    administrativo.merge(data)

    await administrativo.save()

    return administrativo
  }

  /**
   * Delete a administrativo with id.
   * DELETE administrativos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const administrativo = await Administrativo.findOrFail(params.id)

    await administrativo.delete()
  }
}

module.exports = AdministrativoController
