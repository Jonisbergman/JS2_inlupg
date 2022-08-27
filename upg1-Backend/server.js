require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 9999;

const serverURI = 'http://localhost:' + PORT;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => console.log('Server: ' + serverURI));

if(!mongoURI) {
    console.log('cannot find the environment variable')    
}   else    {
    mongoose.connect(mongoURI, () => console.log('Connected to DB'));
}

