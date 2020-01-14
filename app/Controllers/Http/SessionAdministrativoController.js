'use strict'

class SessionAdministrativoController {

  async store({ request, auth }) {
    const { cpf, password } = request.all()

    // console.log(cpf, password)
    
    const autenticador = auth.authenticator('administrativo')

    const token = await autenticador.attempt(cpf, password)

    return token
  }

}

module.exports = SessionAdministrativoController
