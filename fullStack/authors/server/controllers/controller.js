const Author = require('../models/models');
module.exports = {
    // CREATE
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // READ
    getAuthor: (req, res) => {
        Author.find()
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    getOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // UPDATE
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate({_id: req.params.id }, req.body, { new: true, runValidators: true})
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    addQuote: (req, res) => {
        Author.findByIdAndUpdate(req.params._id, { $push: { quote: req.body } }, { new: true, runValidators: true })
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // DELETE
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "error", error: err }))
    }
}