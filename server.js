express = require("express"),
cors = require('cors')
bodyParser = require("body-parser"),
mongoose = require('mongoose');
require('dotenv').config()
const morgan = require('morgan')
var app = express();
var port = process.env.PORT || 3000;//fuser -k 8080/tcp
// Morgan
app.use(morgan('tiny'))
//route
app.use(cors())
app.use(express.json())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(require('./routes'));

app.listen(port, function(err){
  
    console.log("Listening on Port: " + port)
});

mongoose.connect(process.env.DB);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});