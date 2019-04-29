const { Router } = require('express');

module.exports = Router();

module.exports = Router()
  .get('/', (req, res, next) => {
    res.send({ body: 'some random quote' })
      .catch(next);
  })   
;
