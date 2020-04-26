const { DateTime } = require("luxon");


//checking if value sent is an valid integer value 
function integerChecker(req, res, next) {
    const id = req.params.id
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'Id value has to be an integer' })
    } else {
        next()
    }
}
//using datetime to check if the choosen date is in the right format
//would be better if I just had used regex
const dateValidation = (date) => {
   
    const checkDate = DateTime.fromISO(date)//"2017-05-15"=> May 15, 2017 at midnight

    return checkDate.isValid
  
}
//testing if the string has the minum and maximun required sizes
const textValidation = (minSize, maxSize, strg)=>{
    
   return strg.length<=maxSize&&strg.length>=minSize
}
//checking if the url points to an image file
function checkURL(url) {
    
    return url.match(/\.(jpeg|jpg|gif|png)$/);
}

//checking if the string follows the email pattern
const validateEmail = (contactMail) => {
    
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return reg.test(contactMail)

}
//checking if the value for rooms number is valid
const roomsValidation = (array) => {

    for (i = 0; i < array.length; i++) {
        if (!typeof array[i].couple === "boolean"||!Number.isInteger(parseInt(array[i].beds))||!Number.isInteger(parseInt(array[i].bookings))||array[i].beds<array[i].bookings) {
            return false
        }
    }
    return true
}
//method to check if each field is in the correct format
function checkRequiredFields(retreat) {

    const { title, date, duration, description, contactMail,imgUrl, rooms} = retreat.body

    if(title==null||date==null||duration==null||description==null||contactMail==null){
        return 'Required fields can not be empty'
    }

    else if(title==""||date==""||duration==""||description==""||contactMail==""){
        return 'Required fields can not be empty'
    }

    else if (!textValidation(10,25,title)) {
        return 'Title has to have at least 10 and max of 25 characters'
    }
    else if (!dateValidation(date)) {
        return 'Date format is not valid'
    }

    else if(!Number.isInteger(parseInt(duration))||parseInt(duration)<=0){
       return 'Duration has to be an integer greater than zero'
    }

    else if (!textValidation(30,150,description)) {
        return 'Description has to have at least 30 and max of 150 characters'
    }
    else if (!validateEmail(contactMail)) {
       return 'E-mail missing or in worng format' 
    }
    else if (rooms!=null&&!roomsValidation(rooms)) {
        return 'Rooms is in worng format' 
    }

    else if (imgUrl!=""&&!checkURL(imgUrl)) {
        return 'Link has to point to an image' 
    }

    else {
        return ""
    }

}

module.exports = {
    integerChecker,
    checkRequiredFields,
}