const express = require('express');
require('dotenv').config()
const dbConnect = require("./database/database");
const mongoose = require('mongoose');
const app = express();


app.use(express.json());

//router
app.use("/api/persons", require("./routes/person"));
//connexion db
dbConnect();


//conx server http
app.listen(process.env.DB_PORT, (Error) => {
    Error ? console.error('we cant connect') : console.log('we are connected');
})

