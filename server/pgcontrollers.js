const postgresHelpers = require('../database/postgresHelpers.js')

const pgcontrollers = {
    getById: (req, res) => {
        return postgresHelpers.getById(req.params.productId)
        .then(data => res.status(200).send(data.rows[0]))
        .catch(err => res.status(400).send(err))
    },

    getByName: (req, res) => {
        return postgresHelpers.getByName(req.params.name)
        .then(data => res.status(200).send(data.rows))
        .catch(err => res.status(400).send(err))
    },

    getFirstByName: (req, res) => {
        return postgresHelpers.getFirstByName(req.params.name)
        .then(data => res.status(200).send(data.rows[0]))
        .catch(err => res.status(400).send(err))
    },

}

module.exports = pgcontrollers;