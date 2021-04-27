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
}, {toJSON: {virtuals: true}})

golfCourseSchema.virtual('properties.popUpMarkup').get(function(){
    return `<a class="popup-link" href="${this.website}">${this.name}</a>
         <p class="popup-location"><b>${this.location}</b></p>
         <p class="popup-desc">${this.description}</p>`
})

const GolfCourse = new Mongoose.model('GolfCourse', golfCourseSchema)

module.exports = GolfCourse

 