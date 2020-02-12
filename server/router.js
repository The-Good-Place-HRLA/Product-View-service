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

module.exports = router;