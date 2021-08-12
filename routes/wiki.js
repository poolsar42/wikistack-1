const express = require('express');
const addPage = require('../views/addPage');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('hello world');
})

router.post('/', (req, res, next) => {
  res.send();
})

router.get('/add', (req, res, next) => {
  res.send(addPage());
})

module.exports = router;
