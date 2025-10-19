README - Parte 1: API de Usuarios
Este proyecto corresponde a la primera parte de la Actividad Complementaria Corte 2. Consiste en
construir una API REST que permita la creación y visualización de perfiles de usuario. Los
desarrolladores de este proyecto son Yeiner Stiven López y Juan José Solarte Castaño.
### Descripción del Proyecto La API expone tres endpoints principales: - GET /users: Retorna un
arreglo con la información de todos los usuarios. - GET /users/:id: Retorna la información de un usuario
específico mediante su id. - POST /users: Permite agregar un nuevo usuario al inicio del listado de
usuarios. Cada usuario contiene las siguientes propiedades: name, phone, email, address, age,
photoUrl. Los datos iniciales pueden poblarse utilizando la herramienta Mockaroo.
// server.js
const express = require('express');
const app = express();
app.use(express.json());
let users = [
 { id: 1, name: "Juan", phone: "123456789", email: "juan@example.com", address: "Calle 1", age: 22, photoUrl: "https://picsum.photos/200" },
 { id: 2, name: "Yeiner", phone: "987654321", email: "yeiner@example.com", address: "Calle 2", age: 23, photoUrl: "https://picsum.photos/200" }
];
// GET all users
app.get('/users', (req, res) => {
 res.json({ success: true, users });
});
// GET user by ID
app.get('/users/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const user = users.find(u => u.id === id);
 if (user) {
 res.json({ message: "user found", success: true, user });
 } else {
 res.json({ message: `user for id = ${id} no found`, success: false });
 }
});
// POST create new user
app.post('/users', (req, res) => {
 const newUser = req.body;
 users = [newUser, ...users];
 res.json({ success: true, users });
});
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
Este servidor puede probarse con herramientas como Postman o Thunder Client.
