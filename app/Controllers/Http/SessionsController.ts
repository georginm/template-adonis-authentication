import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.body()

    try {
      const token = await auth.use('api').attempt(email, password)
      return response.ok(token)
    } catch (error) {
      return response.badRequest(error.message)
    }
  }
}
