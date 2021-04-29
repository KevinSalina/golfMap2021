
function findMatches(wordToMatch, courses){
    return courses.filter(course =>{
        // Need to figure out if course matches what was searched
        const regex = new RegExp(wordToMatch, 'gi')
        return course.name.match(regex) || course.location.match(regex)
    })
}

function displayMatches(){
    const matchArray = findMatches(this.value, golfCourses)
    suggestions.innerHTML = ''
    for(course of matchArray){
        const courseListItem = document.createElement('li')
        const courseSpan = document.createElement('span')
        courseSpan.textContent = `${course.name} - ${course.location}`
        courseSpan.className = 'name'
        courseListItem.appendChild(courseSpan)
        suggestions.appendChild(courseListItem)
        const flyBtns = suggestions.querySelectorAll('.name')
        // console.log(flyBtns)
        flyBtns.forEach(flyBtn =>{
            flyBtn.addEventListener('click', function(){
                const courseNameToMatch = this.innerText.split('-')[0].trim()
                const flyToCourse = golfCourses.filter(course =>{
                    return course.name === courseNameToMatch
                })
                map.flyTo({
                    center: flyToCourse[0].geometry.coordinates,
                    zoom: 15,
                    essentials: true
                })
            })
        })
    }
    if(this.value.length === 0){
        suggestions.innerHTML = ''
    }
    
}

const searchInput = document.querySelector('.search-input')
const suggestions = document.querySelector('.suggestions')
const dropDownBtn = document.querySelector('.search-dropdown-btn')


searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)

dropDownBtn.addEventListener('click', ()=>{
    suggestions.classList.toggle('hide')
    dropDownBtn.classList.toggle('hide')
})








