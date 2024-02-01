const express = require('express');
const productRouter=require('./routers/productRouter')


const app = express();
const port = process.env.PORT|| 5000

require('dotenv').config();
const cors = require('cors');
app.use(cors())

app.use(express.json());
app.get('/',(req, res) => {
    res.send('Jai Sia Ram Jai Bajrangbali')
})

app.use('/api/v1/products',productRouter)

module.exports = app;