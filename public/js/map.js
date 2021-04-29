
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/kevinsalina/cko08i6lx5cop18o4igoxuojl', // style URL
    center: [-72.66145337909197, 41.74844854164804], // starting position [lng, lat]
    zoom: 7 // starting zoom
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    for(course of golfCourses){
        const el = document.createElement('div')
        el.className = 'marker'
        
        const popup = new mapboxgl.Popup({offset: 25}).setHTML(
            `<a class="popup-link" href="${course.website}" target="_blank" rel="noopener noreferrer">${course.name}</a>
            <p class="popup-location"><b>${course.location}</b></p>
            <p class="popup-desc">${course.description}</p>`
        )
        new mapboxgl.Marker(el)
        .setLngLat(course.geometry.coordinates)
        .setPopup(popup)
        .addTo(map)
    }

    const layerList = document.querySelector('#menu')
    const inputs = layerList.querySelectorAll('input')

    function switchLayer(layer){
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/' + layerId);
    }

    inputs.forEach(input =>{
        input.onclick = switchLayer;
    })


  
        







 




   
 