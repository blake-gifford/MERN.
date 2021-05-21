const Author = require('../models/models');
module.exports = {
    // CREATE
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(author => res.json({ message: "success", results: author }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // READ
    getAuthor: (req, res) => {
        Author.find()
            .then(author => res.json({ message: "success", results: author }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    getOneAuthor: (req, res) => {
        console.log(req.params.id)
        Author.findOne({_id: req.params.id})
            .then(author => res.json({ message: "success", results: author }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // UPDATE
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(author => res.json({ message: "success", results: author }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    addQuote: (req, res) => {
        Author.findByIdAndUpdate(req.params._id, { $push: { quotes: req.body } }, { new: true, runValidators: true })
            .then(author => res.json({ message: "success", results: author }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // DELETE
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(author => res.json({ message: "success", results: author }))
            .catch(err => res.json({ message: "error", error: err }))
    }
}