const express = require('express');
// const cors = require('cors');
const app = express();


// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

// app.use(cors())

app.get("/hello", (req, res) => {
    res.json({ message: "Hello" })
})

app.listen(8000, () => console.log('now running on port 8000'));