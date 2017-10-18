const express = require('express');
const path = require('path');


// create application
const app = express();


// middleware
app.use(express.static('dist'));


// all routes
app.get('*', (request, response) => {

    response.sendFile(path.join(__dirname, '../dist/index.html'));

});


// port
const port = process.env.PORT || 8080;


// start application
app.listen(port, () => {

    console.log('Server listening on port %s.', port);

});
