const express = require('express')
const app = express()
const port = 3000
const { printRequest } = require('./config/printRequest')
const responseTime = require('response-time')

router.get('/', printRequest, (req, res) => {
  res.send('home')
})
module.exports = router
