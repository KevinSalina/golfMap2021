// App Config 
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/golfMap2021'

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static('public'))

// Mongoose
const mongoose = require('mongoose')
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log('CONNECTION')
    })
    .catch((err) => {
        console.log('ERROR')
        console.log(err)
    })


// Require Golf Course Model 
const GolfCourse = require('./models/golfcourse.js')
// Require Final Golf Course Data
const golfCourseData = require('./utilities/golfCourseObject.js')


// GeoCode get coordinates
app.get('/', async (req, res) => {
    const golfCourses = await GolfCourse.find({})
    res.render('index', { golfCourses: JSON.stringify(golfCourses) })
})


// Listen on Port 
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})