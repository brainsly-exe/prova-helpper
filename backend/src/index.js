const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

// CONEXÃO COM O BANCO MONGODB
mongoose.connect('mongodb+srv://amorim:12345@cluster0-vougi.mongodb.net/teste-helpper?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)