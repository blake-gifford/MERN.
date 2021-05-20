const controller = require('../controllers/product.controller');

module.exports = app => {
    //CREATE
    app.post('/api/product', controller.createProduct);
    //READ
    app.get('/api/getproduct', controller.getProduct);
    app.get('/api/getproduct/:id', controller.getOneProduct);
    //UPDATE
    app.put('/api/product/:id/update', controller.updateProduct);
    //DELETE
    app.delete('/api/product/:id/delete', controller.deleteProduct);
}