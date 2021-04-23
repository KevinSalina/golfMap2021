const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

// This file gets the lat and long coordinates for each course, adds course object, and then saves the full course array to mongo.

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/golfMap2021', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log('CONNECTION')
    })
    .catch((err)=>{
        console.log('ERROR')
        console.log(err)
    })

// MapBox 
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({accessToken: mapBoxToken});

// Require Golf Course Model
const GolfCourse = require('../models/golfcourse.js')
// Require Golf Course Array Object
const golfCourseObject = require('./golfCourseObject.js')

const finalGolfCourseData = []

// Use mapbox to forward Geocode coordinates for each course using course name and town.
// Lat and long not quite exact for some courses, can edit anomalies after
const getCoordinates = async (golfCourses)=>{
    try{
        for(course of golfCourses){
            const courseGeoData = await geocoder.forwardGeocode({
                query: `${course.name}, ${course.location}`,
                limit: 1
            })
            .send()
            .then((courseGeoData) =>{
                course.geometry = courseGeoData.body.features[0].geometry
                finalGolfCourseData.push(course)
            })
        }
        return finalGolfCourseData
    }
    catch(error){
        console.log('ERROR in Async')
        console.log(error)
    }   
}


getCoordinates(golfCourseObject)
    .then(data =>{
        GolfCourse.insertMany(finalGolfCourseData)
            .then(()=>{
                console.log('Courses added to DB')
            })
    })
    .catch(err=>{
        console.log('ERROR')  
        console.log(err)  
    })


