const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Item = require('../models/items');

const port = process.env.PORT || 3000;

require('dotenv').config();

// BASE DE DATOS
mongoose.connect( process.env.MONGO_DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }, 
).then( () => console.log('Conectado a la Base de Datos')).catch( (err) => console.log(err));

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
app.get('/', async(req, res) => {
    //res.send('HOME');
    try {
        const itemsimg = await Item();
        res.json(itemsimg);
    } catch(err) {
        res.json({ msg: err.message })
    }
});

// IMAGES



// Iniciar
app.listen( port, () => console.log( 'Server started on port', port));