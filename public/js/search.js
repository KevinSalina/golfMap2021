// DOM Elements
const searchInput = document.querySelector('.search-input')
const suggestions = document.querySelector('.suggestions')
const dropDownBtn = document.querySelector('.search-dropdown-btn')

// Event Listeners
// Search Input listeners for type ahead
searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)

// If search input is focused, remove hide class
searchInput.addEventListener('focus', ()=>{
    suggestions.classList.remove('hide')
    dropDownBtn.classList.remove('hide')
})

// Toggle search dropdown 
dropDownBtn.addEventListener('click', ()=>{
    suggestions.classList.toggle('hide')
    dropDownBtn.classList.toggle('hide')
})

// Functions
// Function that returns array of matched golf courses based on user search input
function findMatches(wordToMatch, courses){
    return courses.filter(course =>{
        // Need to figure out if course matches what was searched
        const regex = new RegExp(wordToMatch, 'gi')
        return course.name.match(regex) || course.location.match(regex)
    })
}

// Function that will create a span element for each returned match course and display as clickable flyto button
function displayMatches(){
    const matchArray = findMatches(this.value, golfCourses)
    suggestions.innerHTML = ''
    for(course of matchArray){
        createCourseSpan(course)
        const flyBtns = suggestions.querySelectorAll('.name')
        flyBtns.forEach(flyBtn =>{
            flyBtn.addEventListener('click', courseFlyTo)
        })
    }
    if(this.value.length === 0){
        suggestions.innerHTML = ''
    }
}

// Creates span element for each course matched in search and appends to suggestions 
function createCourseSpan(course){
    const courseListItem = document.createElement('li')
    const courseSpan = document.createElement('span')
    courseSpan.textContent = `${course.name} - ${course.location}`
    courseSpan.className = 'name'
    courseListItem.appendChild(courseSpan)
    suggestions.appendChild(courseListItem)
}

// Matches search to course and flys to course if user clicks on it
function courseFlyTo(){
    const courseNameToMatch = this.innerText.split('-')[0].trim()
    const flyToCourse = golfCourses.filter(course =>{
        return course.name === courseNameToMatch
    })
    map.flyTo({
        center: flyToCourse[0].geometry.coordinates,
        zoom: 15,
        essentials: true
    })
    suggestions.classList.add('hide')
    dropDownBtn.classList.add('hide')
}









