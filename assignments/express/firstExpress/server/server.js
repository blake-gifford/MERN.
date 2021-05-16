const express = require('express');
const app = express();

app.get("/hello", (req, res) => {
    res.json({ message: "Hello" })
})

app.listen(8000, () => console.log('now running on port 8000'));