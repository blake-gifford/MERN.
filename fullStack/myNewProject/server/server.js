const express = require('express');

const app = express();

require('./routes/person.routes')(app);

app.listen(8000, () => console.log('Listening now on port 8000 :)'));