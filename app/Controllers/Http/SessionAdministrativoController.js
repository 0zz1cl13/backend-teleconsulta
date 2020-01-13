'use strict'

class SessionAdministrativoController {

  async store({ request, auth }) {
    const { cpf, senha } = request.all()

    console.log(cpf, senha)
    
    const autenticador = auth.authenticator('administrativo')

    const token = await autenticador.attempt(cpf, senha)

    return token
  }

}

module.exports = SessionAdministrativoController
