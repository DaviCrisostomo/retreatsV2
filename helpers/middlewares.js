const { DateTime } = require("luxon");

function integerChecker(req, res, next) {
    const id = req.params.id
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID value has to be an integer' })
    } else {
        next()
    }
}

function dateValidation(req, res, next) {
    const date = req.params.date
    const arrival = DateTime.fromISO(date.arrival)//"2017-05-15"=> May 15, 2017 at midnight
    const departure = DateTime.fromISO(date.departure)

    if (arrival.isValid && departure.isValid) {
        next()
    }
    else {
        res.status(400).json({ message: 'Date format is not valid' })
    }

}

function validateEmail(req, res, next) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = req.params.email
    if (reg.test(email)) {
        next()
    } else {
        res.status(400).json({ message: 'Invalid format for email' })
    }

}

function checkRequiredFields(req, res, next) {
    const { date, location, contacts } = req.body
    if (date.arrival && date.departure && location && contacts) {
        next()
    } else {
        res.status(400).json({ message: 'Required fields can\'t be null' })
    }

}

module.exports = {
    integerChecker,
    checkRequiredFields
}