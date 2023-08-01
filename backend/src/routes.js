const express = require('express')

const routes = express.Router();
const users = [{
    id: 1,
    name: 'Julia',
    email: 'juliagabrielle863@gmail.com',
    password: '123456'
}]

routes.post('/login', (req, res)=>{
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password)
    if (user)
    {
        return res.status(200).json(user)//status 200 é que deu certo, e json(user), manda 
        //pra tela o json do usuário que logou. no caso o id pipipiopopop
    }
    return res.status(401).json({ message: 'Credenciais inválidas'})//esse retorna codigo de erro
    //e retorna um json com a mensagem de credenciais inválidas
});

module.exports = routes;