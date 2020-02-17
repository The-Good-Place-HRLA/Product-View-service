const router = require('express').Router();
const controllers = require('./controllers.js');
const pgcontrollers = require('./pgcontrollers.js')

// Routes with Mongo
router
  .route('/api')
  .get(controllers.get)
  .post(controllers.create)
  .delete(controllers.deleteAll)

router
  .route('/api/:productId')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne)

  router
  .route('/api/getOne/:name')
  .get(controllers.getOnebyName)

  router
  .route('/api/getAll/:name')
  .get(controllers.getAllbyName)

  // Routes with Postgres
  router
  .route('/pg/:productId')
  .get(pgcontrollers.getById)

  router
  .route('/pg/getOne/:name')
  .get(pgcontrollers.getFirstByName)

  router
  .route('/pg/getAll/:name')
  .get(pgcontrollers.getByName)

module.exports = router;