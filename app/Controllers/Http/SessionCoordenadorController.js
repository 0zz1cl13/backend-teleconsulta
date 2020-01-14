'use strict'

class SessionCoordenadorController {

  async store ({ request, auth }) {
    const { cpf, password } = request.all()

    // console.log(cpf, password)
    
    const autenticador = auth.authenticator('coordenador')

    const token = await autenticador.attempt(cpf, password)

    return token
  }
}

module.exports = SessionCoordenadorController
