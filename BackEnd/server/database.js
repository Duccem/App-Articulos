const mongoose = require('mongoose');
const URI = 'mongodb://localhost/Articulos';
mongoose.connect(URI,{useNewUrlParser:true})
     .then(db => console.log('db is connect'))
     .catch(err => console.error(err));
module.exports = mongoose;
