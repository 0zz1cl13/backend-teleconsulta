'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

Route.post('/sessions/administrativo', 'SessionAdministrativoController.store')
Route.post('/sessions/coordenador', 'SessionCoordenadorController.store')
Route.post('/sessions/admin', 'SessionAdminController.store')

Route.post('/admin', 'AdminController.store')

Route.post('/administrativo', 'AdministrativoController.store')
Route.get('/administrativo', 'AdministrativoController.index')
Route.get('/administrativo/:id', 'AdministrativoController.show')
Route.put('/administrativo/:id', 'AdministrativoController.update')
Route.delete('/administrativo/:id', 'AdministrativoController.destroy')

Route.post('/coordenador', 'CoordenadorController.store')
Route.get('/coordenador', 'CoordenadorController.index')
Route.get('/coordenador/:id', 'CoordenadorController.show')
Route.put('/coordenador/:id', 'CoordenadorController.update')
Route.delete('/coordenador/:id', 'CoordenadorController.destroy')
Route.post('/coordenador/:id/images', 'ImageController.store')

Route.get('/images', 'ImageController.index');
Route.delete('/images/:id', 'ImageController.destroy');
Route.post('/images', 'ImageController.create');

