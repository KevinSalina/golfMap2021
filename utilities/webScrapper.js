const axios = require('axios')
const cheerio = require('cheerio')
const golfCourseInfo = [];
const golfCourseLinks =[];
const golfCourseData = {};

// Get Data from freegolf.net
const getGolfCourseInfo = async () =>{
    try{
        const { data } = await axios.get('https://freegolf.net/courses/');
        const $ = cheerio.load(data)
        const elements = $('.tabcontainer > .av_tab_section > .tab_content > .tab_inner_content > p')
        const links = $('.tabcontainer > .av_tab_section > .tab_content > .tab_inner_content > p > a')
       
    
        $(elements).each((index, element) =>{
            if($(element).children().length > 0){
                golfCourseInfo.push($(element).text().split(/\r?\n/))
            } else {
                golfCourseInfo[golfCourseInfo.length-1].push($(element).text())
            }
        })

        $(links).each((index, link) =>{
            golfCourseLinks.push([$(link).text(), $(link)[0].attribs.href])
        })

    }
    catch (error){
        console.log("ERROR")
        console.log(error)
    }
}

// Clean Data into Array of nested array courses
getGolfCourseInfo()
    .then(()=>{
        cleanCourseInfo(golfCourseInfo)
        addLinkToCourseInfo()
    })
    .catch((err)=>{
        console.log('ERROR')
        console.log(err)
    })


// Functions
function cleanCourseInfo(golfCouseInfo){
    golfCourseInfo.forEach(course =>{
        let trimmedNameAndLocation = [];
        const splitNameAndLocation = course[0].split(/(–(.+)|,(.+))/, 2)
        if(splitNameAndLocation[1]){
            trimmedNameAndLocation.push(splitNameAndLocation[0].trim(), splitNameAndLocation[1].replace((/^(–|,)/),'').trim())
        } 
        course.splice(0,1,...trimmedNameAndLocation)
    })

    return golfCourseInfo
}

function addLinkToCourseInfo(){
    for(let i = 0; i < golfCourseInfo.length; i++){
        if(golfCourseLinks[i]){
            if(golfCourseLinks[i][0] === golfCourseInfo[i][0]){
                golfCourseInfo[i].splice(2,0,golfCourseLinks[i][1])
            }
        }
    }
    // Console.dir and copy over array to golfCourseArray.js
  console.dir(golfCourseInfo, {'maxArrayLength': null})  
}


