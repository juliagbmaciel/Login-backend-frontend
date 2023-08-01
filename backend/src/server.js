const express = require('express')
const app = express();
const routes = require('./routes')
app.use(express.json());
app.use(routes)

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(3000, ()=>{
    console.log('executando na porta 3000 localhost:3000')
})
