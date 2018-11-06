const express  = require('express');
const cors = require('cors');
const app = express();
const { mongoose } = require ('./database');
//settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
//Routes
app.use('/api/articulos/',require('./Routes/articulos.routes'));

//Starting the server

app.listen(app.get('port'),()=>{
     console.log("server on port"+app.get('port'));
});
