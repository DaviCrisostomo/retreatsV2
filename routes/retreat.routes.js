const express = require('express')
const router = express.Router()
const retreat = require('../models/retreat.model')
const m = require('../helpers/middlewares')
// Routes
module.exports = router

/* All retreats */
router.get('/', async (req, res) => {
    await retreat.getRetreats()
    .then(retreats => res.json(retreats))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})