const express = require('express');

const routes = express.Router();
const users = [{
    id: 120,
    name: 'julia',
    email: 'juliagabrielle863@gmail.com',
    password: '123456'
},
{
    id: 230,
    name: 'Byanka',
    email: 'Byankatomaz@gmail.com',
    password: '123456'
},
{
    id: 400,
    name: 'Keven',
    email: 'kevensantos993@gmail.com',
    password: '123456'
},
{
    id: 500,
    name: 'Xizólia',
    email: 'juliass7187@gmail.com',
    password: '123456'
}];

routes.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        return res.status(200).json(user);
    }

    return res.status(401).json({ message: 'Credenciais inválidas' });
});

module.exports = routes;