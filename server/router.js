const router = require('express').Router();
const controllers = require('./controllers.js');

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

module.exports = router;