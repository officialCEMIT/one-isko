const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // GLOBAL JSON

const api = require('./routes/index');
app.use('/api', api);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`CONNECTED TO ${process.env.DB_CONNECTION}`)
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))