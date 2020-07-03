'use strict'

class SessionAdminController {

  async store({ request, auth }) {
    const { cpf, password } = request.all()

    const autenticador = auth.authenticator('admin')

    const token = await autenticador.attempt(cpf, password)

    return token
  }

}

module.exports = SessionAdminController
