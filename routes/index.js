// Import our Controllers
const carController = require('../controllers/carController')

const routes = [
  {
    method: 'GET',
    url: '/api/1/cars',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/api/1/cars/:id',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/1/cars',
    handler: carController.addCar,
    schema: carController.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/1/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/1/cars/:id',
    handler: carController.deleteCar
  }
]

module.exports = routes
