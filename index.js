const express = require('express');
const app = express()


app.get('/', function(req, res){
   res.send('Welcome to the Communication Module')

});


app.listen(3000);

console.log('Running on port 3000');
