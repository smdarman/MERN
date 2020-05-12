const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'home/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
//app.get('*', (req,res) =>{
//    res.sendFile(path.join(__dirname+'/home/build/index.html'));
//});

//app.use(express.static(path.join(__dirname, '../build')))
//
//app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, '../build'))
//})


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'home/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'home/build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);