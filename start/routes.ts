import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Authenticate Test Route
  Route.get('/', async ({ auth }: HttpContextContract) => {
    await auth.use('api').authenticate()
    return { hello: 'world' }
  })

  // Users
  Route.resource('/users', 'UsersController').except(['create', 'edit']).as('user')

  // Session
  Route.post('/sessions', 'SessionsController.store').as('session.store')
}).prefix('/api')
