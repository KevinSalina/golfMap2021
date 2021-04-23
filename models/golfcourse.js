const Mongoose  = require('mongoose');

const golfCourseSchema = new Mongoose.Schema({
    name: String,
    location: String,
    website: String,
    description: String,
    geometry : {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number]
        }
    },
    hasPlayed: {
        type: Boolean,
        default: false
        }, 
    rating: Number,
    score:  Number
})

const GolfCourse = new Mongoose.model('GolfCourse', golfCourseSchema)

module.exports = GolfCourse

