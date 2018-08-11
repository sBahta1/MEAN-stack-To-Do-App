// require express
const express = require( 'express' );
const app = express();
const port = process.env.PORT || 5000;
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Static files
app.use(express.static('server/public'));



app.listen(port,() => {
    console.log( 'Listening on port', port );    
});