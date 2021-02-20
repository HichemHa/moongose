const mongoose = require('mongoose');
require('dotenv').config()

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,  })
        .then(() => console.log("database connected"))
        .catch(error => console.error('conection lost ', error));
}

module.exports = dbConnect;
