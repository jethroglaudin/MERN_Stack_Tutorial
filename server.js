const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.Port || 5000
const items = require('./routes/api/items');



const app = express(); 
//Bodyparser Middleware
app.use(bodyParser.json());

// connect to mongoDB
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mernshopping', { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Successfully connected to mongoDB`)
    }
});

// Use routes
app.use('/api/items', items)

app.listen(port, () => console.log(`Server started on port ${port}`));