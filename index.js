// Import packages
const express = require('express')
const morgan = require('morgan')// App
const app = express()// Morgan
app.use(morgan('tiny'))// First route
app.get('/', (req, res) => {
    res.json({ message: 'Juicy Leine' })
})// Starting server
app.listen('1337')