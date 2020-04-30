const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()
mongoose.connect('mongodb+srv://OrlanildoAldo:orla386492@@cluster0-gires.mongodb.net/dbTgFatec?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)


app.listen(3333, () => console.log('Server run...'))