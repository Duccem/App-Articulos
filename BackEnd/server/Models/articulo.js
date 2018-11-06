const mongoose = require('mongoose');
const {Schema} = mongoose;

const ArticuloSchema = new Schema({
     title: {type:String, required:true},
     content: {type:String, required:true},
     visits: {type:Number,required:true}
});

module.exports = mongoose.model('Articulo',ArticuloSchema);
