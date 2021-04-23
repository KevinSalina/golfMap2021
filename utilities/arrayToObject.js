// Require golfCourseArray
const golfCourseArray = require('./golfCourseArray.js')
const golfCourseObject = []

// For Each course array, set elements to golf course Object
function transformCourseArray(golfArray){
  golfArray.forEach(course =>{
    const courseObject = {}
    courseObject.name = course[0]
    courseObject.location = course[1]
    courseObject.website = course[2]
    courseObject.description = course.slice(3,).join('\n')
    golfCourseObject.push(courseObject)
  })
  return golfCourseObject
}

// Console.dir final array of object, copy and paste into golfCourseObject.js
console.dir(transformCourseArray(golfCourseArray), {'maxArrayLength': null})




