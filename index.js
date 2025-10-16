require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const users = require("./date/users")
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.get('/', (req, res) => {
    res.json({
        message: '¡Hola! Express funcionando',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});

app.get('/users', (req, res) => {
    res.json({
        message: 'Lista de usuarios',
        status: 'succes',
        users: users

    })
})




app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
