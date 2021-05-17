const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// offloading our routes to another file
require('./routes/routes')(app);

app.listen(8000, () => console.log('now running on port 8000'));

