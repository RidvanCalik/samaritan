const express = require('express');
const app = express();
const router = require('./router/');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
//const Cat = mongoose.model('Cat', { name: String });
//const kitty = new Cat({ name: 'Zildjian' });
app.use(express.json())
app.use(cors())
app.use(router);



app.listen(process.env.SERVER_PORT, () => {
    mongoose.connect(process.env.MONGO_CONNECT_URL);
});