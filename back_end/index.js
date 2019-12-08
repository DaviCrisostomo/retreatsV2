// Import packages
const express = require('express')
const morgan = require('morgan')
const sanitizer = require('express-autosanitizer')
// App
const app = express()
app.use(sanitizer.allUnsafe);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Custom-Header, X-Requested-With, Authorization, Content-Type, Accep');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Morgan
app.use(morgan('tiny'))

//route
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(require('./routes/index.routes'))
// Starting server
app.listen('8080')