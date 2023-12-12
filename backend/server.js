require('dotenv').config()
port = process.env.PORT

const express = require('express')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

// list of requests
app.listen(port, () => {
    console.log('Running port',  port)
})
