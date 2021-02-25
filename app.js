const cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const { truncateSync } = require("fs");
const PB = require("./schema/phonebook.js");

mongoose
    .connect("mongodb://localhost/db", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch((e) => {
        console.log("Error connecting to mongoDB");
        console.log(e);
    });

const app = express();

app.use(cors())

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

app.use('/', require('./routes/phonebook'));

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));