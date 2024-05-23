const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const commerceRoutes = require('./commerceRoutes');

const app = express();

/* exemple url : mongodb://myAdmin:nicolas@127.0.0.1:27017/?authsource=admin */
mongoose.connect('mongodb://myAdmin:nicolas@127.0.0.1:27017/?authsource=admin', 
    {
        useNewUrlParser: true,
    }
);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database OK'));

app.use(bodyParser.json());

app.use('/', commerceRoutes);

app.listen(3000, () => console.log('Server Started OK'));