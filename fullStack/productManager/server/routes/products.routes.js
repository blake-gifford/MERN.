const controller = require('../controllers/product.controller');

module.exports = app => {
    //CREATE
    app.post('/api/product', controller.createProduct);
    //READ
    app.get('/api/getproduct', controller.getProduct);
    // app.get('/api/:id', controller.getOneProduct);
    //UPDATE
    app.put('/api/product/:id', controller.updateProduct);
    //DELETE
    
}