const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productdb2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connection Established'))
    .catch(err => console.log('There Was An Error', err))
