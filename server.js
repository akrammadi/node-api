//Pra executar o mongodb, digitar no terminal: docker start mongodb. O endereço é: http://192.168.99.100/
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())

//Iniciando o DB
mongoose.connect(
    'mongodb://192.168.99.100:27017/nodeapi',
    {useNewUrlParser:true} 
)
requireDir('./src/models')

//Rotas 
app.use('/api',require('./src/routes'))

app.listen(3001)