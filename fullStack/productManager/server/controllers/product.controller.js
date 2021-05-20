const Product = require('../models/product.models');

module.exports = {
    //CREATE
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    //READ
    getProduct: (req, res) => {
        Product.find()
        .then(data => res.json({ results: data }))
        .catch(err => res.json({ message: "error", error: err }))
    },
    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(data => res.json({ results: data }))
        .catch(err => res.json({ message: "error", error: err}))
    },

    //UPDATE
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id }, req.body, { new: true, runValidators: true})
        .then(data => res.json({ results: data }))
        .catch(err => res.json({ message: "error", error: err}))
    },
    //DELETE
    deleteProduct: (req, res) => {
        Product.findByIdAndDelete({_id: req.params.id})
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "error", error: err}))
    }
}