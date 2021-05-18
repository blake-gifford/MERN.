const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.listen(8000, () => console.log('Server Now Listening on Port 8000 :)'));

