var mongoose = require('mongoose');
//schema for mongo db
var retreatSchema = new mongoose.Schema({ 

    //id: {type: mongoose.Schema.Types.ObjectId, index: true, unique:true, auto: true}, //root element
    title: String,
    date: Date,
    duration: Number,
    description: String,
    contactMail: {type:String, lowercase:true},
    imgUrl: String,
    rooms: [
    {
    couple: Boolean,
    beds: Number,
    bookings: Number,
    price: Number
    },
    ]
        });

module.exports = mongoose.model('Retreats', retreatSchema);