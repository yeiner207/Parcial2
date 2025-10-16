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
        status: 'success',
        users: users

    })
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return res.status(404).json({
            message: `user for id = ${id}`,
            status: 'error'
        })

    }
    res.status(200).json({
        message: "user found",
        status: 'success',
        user: user
    })
})
app.post('/users', (req, res) => {
    const { name, phone, email, adress, age, photo } = req.body;
    const user = { id: (users.length + 1), name, phone, email, adress, age, photo };
    users.unshift(user);
    res.json({
        message: 'usuario creado',
        status: 'success',
        user: user
    });
});
app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    const userindex = users.findIndex((user) => user.id === parseInt(id));
    users.splice(userindex, 1)
    res.json({
        message: 'usuario eliminado',
        status: 'success',
        user: userindex
    });
})

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
