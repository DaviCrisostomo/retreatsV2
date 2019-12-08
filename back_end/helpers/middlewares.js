const { DateTime } = require("luxon");



function integerChecker(req, res, next) {
    const id = req.params.id
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'Id value has to be an integer' })
    } else {
        next()
    }
}

const dateValidation = (date) => {
   
    const checkDate = DateTime.fromISO(date)//"2017-05-15"=> May 15, 2017 at midnight

    return checkDate.isValid
  
}

const textValidation = (minSize, maxSize, strg)=>{
    
   return strg.length<=maxSize&&strg.length>=minSize
}

function checkURL(url) {
    
    return url.match(/\.(jpeg|jpg|gif|png)$/);
}

const validateEmail = (contactMail) => {
    
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return reg.test(contactMail)

}

const roomsValidation = (array) => {

    for (i = 0; i < array.length; i++) {
        if (!typeof array[i].couple === "boolean"||!Number.isInteger(parseInt(array[i].beds))||!Number.isInteger(parseInt(array[i].bookings))||array[i].beds<array[i].bookings) {
            return false
        }
    }
    return true
}

function checkRequiredFields(req, res, next) {

    const { title, date, duration, description, contactMail,imgUrl, rooms} = req.body

    if(title==null||date==null||duration==null||description==null){
        res.status(400).json({ message: 'Required fields can not be null' })
    }

    else if (!textValidation(10,25,title)) {
        res.status(400).json({ message: 'Title has to have at least 10 and max of 25 characters' })
    }
    else if (!dateValidation(date)) {
        res.status(400).json({ message: 'Date format is not valid' })
    }

    else if(!Number.isInteger(parseInt(duration))||duration<=0){
        res.status(400).json({ message: 'Duration hos to be greater than zero' })
    }

    else if (!textValidation(30,150,description)) {
        res.status(400).json({ message: 'Description has to have at least 30 and max of 150 characters' })
    }
    else if (!validateEmail(contactMail)) {
        console.log(description)
        res.status(400).json({ message: 'E-mail missing or in worng format' })
    }
    else if (rooms!=null&&!roomsValidation(rooms)) {
      
        res.status(400).json({ message: 'Rooms is in worng format' })
    }

    else if (imgUrl!=""&&!checkURL(imgUrl)) {
    
        res.status(400).json({ message: 'Link has to point to an image' })
    }

    else {
        next()
    }

}

module.exports = {
    integerChecker,
    checkRequiredFields,
}