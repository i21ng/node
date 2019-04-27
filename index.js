const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

require('./models/Personas');
mongoose.connect(keys.MONGO_URL);

const pr = require('./routes/personasRoutes')(app);

app.listen(process.env.PORT || 5000);

//Puerto 5000 para backend
//Puerto 3000 para frontend
// Se realiza una ruta por colección
