// const helpers = require('../database/dbHelpers.js');


const controllers = {
  get: (req, res) => {
    return helpers.get()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err))
  },

  getOne: (req, res) => {
    return helpers.getOne(req.params.productId)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err))
  },

  getOnebyName: (req, res) => {
    return helpers.getOnebyName(req.params.name)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err))
  },

  getAllbyName: (req, res) => {
    return helpers.getAllbyName(req.params.name)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err))
  },  

  create: (req, res) => {
    return helpers.create(req.body)
    .then((data) => res.status(201).send(data))
    .catch(err => res.status(401).send(err))
  },

  updateOne: (req, res) => {
    return helpers.updateOne(req.params.productId, req.body)
    .then((data) => res.status(202).send(data))
    .catch(err => res.status(402).send(err))
  },

  deleteOne: (req, res) => {
    return helpers.deleteOne(req.params.productId)
    .then((data) => res.status(203).send(data))
    .catch(err => res.status(403).send(err))
  },

  deleteAll: (req, res) => {
    return helpers.deleteAll()
    .then(data => res.status(203).send(data))
    .catch(err => res.status(403).send(err))
  }


}

module.exports = controllers;