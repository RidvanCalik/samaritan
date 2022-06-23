const express = require('express');
require('dotenv').config()

const app = express();
app.get('/', (req, res) => {
    res.json(process.env.SERVER_PORT);
})
app.listen(process.env.SERVER_PORT, () => {
    console.log("heey");
});