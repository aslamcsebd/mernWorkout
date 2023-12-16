require('dotenv').config()
port = process.env.PORT

// express app
const express = require('express')
const mongoose = require('mongoose')
const workoutRouters = require('./routes/workouts')
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
var cors = require('cors');
app.use(cors())
app.use('/api/workouts', workoutRouters)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // list of requests
        app.listen(port, () => {
            console.log('Connect to db & port',  port)
        })
    })
    .catch((error) => {
        console.log(error)
    })