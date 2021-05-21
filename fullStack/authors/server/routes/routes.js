const controller = require('../controllers/controller');

module.exports = app => {
    // CREATE
    app.post('/api/author', controller.createAuthor);
    // READ
    app.get('/api/author', controller.getAuthor);
    app.get('/api/author/:id', controller.getOneAuthor);
    // UPDATE
    app.put('/api/author/:id/update', controller.updateAuthor);
    app.put('/api/author/:_id/quote', controller.addQuote);
    // DELETE
    app.delete('/api/author/:id/delete', controller.deleteAuthor);
}