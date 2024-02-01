const express = require('express');
const connectDB = require('./db/connect')
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

// const start = async () => {
//     try {
//         await connectDB(process.env.MONGO_URI)
//         await app.listen(port, () => {
//             console.log(`Example app listening on port ${port}`)
//         })
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// start();
module.exports = app;