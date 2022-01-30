const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// BASE DE DATOS
mongoose.connect( process.env.MONGO_DB )
                               .then( () => console.log('Conectado a la Base de Datos'))
                               .catch( (err) => console.log(err));

// Import Routes
const itemsRoutes = require('./routes/item');
const imgRoutes = require('./routes/img');
const paymentsIntentRoutes = require('./routes/paymentsIntent');
const orderRoutes = require('./routes/order')

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use('/items', itemsRoutes);
app.use('/img', imgRoutes);
app.use('/create-payment-intent', paymentsIntentRoutes);
app.use('/order', orderRoutes);

// Rutas
app.get('/', (req, res) => {
    res.send('HOME');
});

// IMAGES



// Iniciar
app.listen( process.env.PORT );