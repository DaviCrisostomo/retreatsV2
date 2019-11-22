// Import packages
const express = require('express')
const router = express.Router()
const retreat = require('../models/retreat.model')
const m = require('../helpers/middlewares')
// Routes

const morgan = require('morgan')// App
const app = express()// Morgan

app.use(morgan('tiny'))// First route
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(require('./routes/index.routes'))
/*
app.get('/', (req, res) => {
    res.json({ message: 'Juicy Leine' })
})*/
// Starting server
app.listen('1337')