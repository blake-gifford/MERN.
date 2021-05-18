const Product = require('../models/product.models');

module.exports = {
    //CREATE
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(response => res.json({ message: "success", data: response }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    //READ
    getProduct: (req, res) => {
        Product.find()
            .then(response => res.json({ message: "success", data: response}))
            .catch(err => res.json({ message: "error", error: err }))
    },
    //UPDATE
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id }, req.body, { new: true, runValidators: true})
            .then(response => res.json({ message: "success", data: response}))
            .catch(err => res.json({ message: "error", error: err}))
    },
    //DELETE
    
}