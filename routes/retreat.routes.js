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

/* A post by id */
router.get('/:id', m.integerChecker, async (req, res) => {
    const id = req.params.id    
    await retreat.getRetreat(id)
    .then(retreat => res.json(retreat))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message:  err.message })
        }
    })
})

/* Insert a new retreat */
router.post('/', m.checkRequiredFields, async (req, res) => {
  
    await retreat.insertRetreat(req.body)
    .then(r => res.status(201).json({
        message: `The retreat #${r.id} has been created`,
        content: retreat
    }))
    .catch(err => res.status(500).json({ message:err.message}))
})

/* Update a retreat */
router.put('/:id', m.integerChecker, m.checkRequiredFields, async (req, res) => {
    const id = req.params.id    
    await retreat.updateRetreat(id, req.body)
    .then(retreat => res.json({
        message: `The retreat #${id} has been updated`,
        content: retreat
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

/* Delete a post */
router.delete('/:id', m.integerChecker, async (req, res) => {
    const id = req.params.id
    
    await retreat.deleteRetreat(id)
    .then(retreat => res.json({
        message: `The retreat #${id} has been deleted`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})