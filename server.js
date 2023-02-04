const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const {expressjwt} = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://jordanburger22:.5HC5.FQHsqYVz8@cluster0.cihycu0.mongodb.net/?retryWrites=true&w=majority", () => console.log('connected to database'))

// app.use('/admin', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))


app.use('/services', require('./routes/services.js'))
app.use('/businessinfo', require('./routes/businessInfo.js'))
app.use('/massagestyles', require('./routes/massageStyles.js'))
app.use('/admin', require('./routes/adminRouter.js'))



app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(5555, () => {
    console.log('server is running on port 5555')
})