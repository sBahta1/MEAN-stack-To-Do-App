// require express
const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 5000;
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//connecting mongoose and mongodb
const mongoose = require('mongoose');
mongoose.connect(mongoURI, {useNewUrlParser: true});
mongoose.connection.on('open', () => {
    console.log('Connected to Mongo');
});
mongoose.connection.on('error', (error) => {
    console.log('ERROR CONNECTING TO MONGO', error);
});

// Static files
app.use(express.static('server/public'));



app.listen(port,() => {
    console.log( 'Listening on port', port );    
});