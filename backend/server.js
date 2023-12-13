require('dotenv').config()
port = process.env.PORT

// express app
const express = require('express')
const workoutRouters = require('./routes/workouts')
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRouters)

// list of requests
app.listen(port, () => {
    console.log('Running port',  port)
})
