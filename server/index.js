const express = require('express') 
const routes = require('../infra/routes/routes')  

const app = express() 
const port = 3333 

app.use(express.json()) 

 app.use('/users', routes) 

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`) 
}) 
