const controller = require('../contrillers/product.controller');

module.exports = app => {
    //CREATE
    app.post('/api/product', controller.createProduct);
    //READ
    app.get('/api/product', controller.getProduct);
    //UPDATE
    app.put('/api/product/:id', controller.updateProduct);
    //DELETE
}