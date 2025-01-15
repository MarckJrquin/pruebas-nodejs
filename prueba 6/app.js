const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

const db = require("./app/models");

const productRoutes = require('./app/routes/product.routes');

const app = express();

app.use(cors());

app.use(express.json());

db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application." });
});

app.use('/api/products', productRoutes);


/* -- Se configura el puerto y escucha las solicitudes entrantes -- */
const startServer = async () => {
    try {
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();
