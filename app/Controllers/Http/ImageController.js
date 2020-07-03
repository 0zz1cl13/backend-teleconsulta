'use strict'

const Helpers = use('Helpers')

const Image = use('App/Models/Image')
const Coordenador = use('App/Models/Coordenador')

/**
 * Resourceful controller for interacting with images
 */
class ImageController {

  async index({ request, response, view }) {
    const imagens = await Image.all()

    return imagens
  }

  async store({ params, request }) {
    const coordenador = await Coordenador.findOrFail(params.id)

    const images = request.file('image', {
      types: ['image'],
      size: '2mb'
    })

    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
    }))

    if (!images.movedAll()) {
      return images.errors()
    }

    await Promise.all(
      images
        .movedList()
        .map(image => coordenador.images().create({ path: image.fileName }))
    )
  }

  async destroy({ params, request, response }) {
    const image = await Image.findOrFail(params.id)

    await image.delete()
  }
}

module.exports = ImageController
