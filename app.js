//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const { truncateSync } = require("fs");


//useNewUrlParser 
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


//On définit notre objet express nommé app
const app = express();

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

//Définition du routeur
app.use('/', require('./routes/phonebook'));

//Définition et mise en place du port d'écoute
const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));