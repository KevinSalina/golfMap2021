// App Config 
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static('public'))

// Mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/golfMap2021', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log('CONNECTION')
    })
    .catch((err)=>{
        console.log('ERROR')
        console.log(err)
    })

// Require Golf Course Model 
const GolfCourse = require('./models/golfcourse.js')
// Require Final Golf Course Data
const golfCourseData = require('./utilities/golfCourseObject.js')


// GeoCode get coordinates
app.get('/', async (req, res) =>{
    const golfCourses = await GolfCourse.find({})
    console.log(golfCourses)
    res.render('index', {golfCourses})
})


// Listen on Port 
app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})