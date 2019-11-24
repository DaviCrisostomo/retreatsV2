const { DateTime } = require("luxon");

function integerChecker(req, res, next) {
    const id = req.params.id
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID value has to be an integer' })
    } else {
        next()
    }
}

const dateValidation = (date) => {
   
    const checkDate = DateTime.fromISO(date)//"2017-05-15"=> May 15, 2017 at midnight

    return checkDate.isValid
  
}

const nameValidation = (name) => {

    const reg = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

    return reg.test(name)

}


const validateEmail = (email) => {
    
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return reg.test(email)

}

const contactsValidation = (array) => {

    for (i = 0; i < array.length; i++) {
        if (!nameValidation(array[i].name) || !validateEmail(array[i].email)) {
            return false
        }
    }
    return true
}

function checkRequiredFields(req, res, next) {

    const { date, location, contacts } = req.body

    if (!location.country || !location.city || !location.address) {
        res.status(400).json({ message: 'Location fields can\'t be null' })
    }
    else if (!dateValidation(date.arrival) && !dateValidation(date.departure)) {
        res.status(400).json({ message: 'Date format is not valid' })
    }

    else if (!contactsValidation(contacts)) {
        res.status(400).json({ message: 'One or more contact fields missing information or in wrong format' })
    }
    else {
        next()
    }

}

module.exports = {
    integerChecker,
    checkRequiredFields,
}