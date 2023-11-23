const mongoose = require('mongoose');

const connectionString = "mongodb+srv://linossier:DhNwpE5gbEaMKTCU@cluster0.ucxpray.mongodb.net/logement";

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
