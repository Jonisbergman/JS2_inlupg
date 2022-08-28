require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 9999;


// no env neeeded
const serverURI = 'http://localhost:9999';
const mongoURI = "mongodb+srv://Jonis:JS2db2022@cluster0.men5k.mongodb.net/js2inl?retryWrites=true&w=majority"



app.listen(PORT, () => console.log('Server: ' + serverURI));

if(!mongoURI) {
    console.log('cannot find the environment variable')    
}   else    {
    mongoose.connect(mongoURI, () => console.log('Connected to DB'));
}



