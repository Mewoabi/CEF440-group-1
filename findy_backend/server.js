require('dotenv').config()
const cors = require("cors")
const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/item')
const userRoutes = require('./routes/user')

// express app
const app = express()
mongoose.set('strictQuery', false)

// middleware
app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/item', itemRoutes)
app.use('/auth/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })