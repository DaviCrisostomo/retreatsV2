const express = require('express')
const router = express.Router()
module.exports = routerrouter.use('/api/v1/retreats', require('./retreat.routes'))