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


    // map.on('load', function () {
    //     // Add Image to use as marker icon
    //     map.loadImage('./birdie.png', function(err, image){
    //         if(err) throw err;
    //         map.addImage('custom-marker', image);
    //         // Add GeoJSON data
    //         map.addSource('courses', {
    //             'type': 'geojson',
    //             'data': {
    //                 'type': 'FeatureCollection',
    //                 'features': golfCourses
    //             }
    //         });
        

    //     // Add a layer showing the places.
    //     map.addLayer({
    //         'id': 'courses',
    //         'type': 'symbol',
    //         'source': 'courses',
    //         // 'paint': {
    //         //     'circle-color': '#4264fb',
    //         //     'circle-radius': 6,
    //         //     'circle-stroke-width': 2,
    //         //     'circle-stroke-color': '#ffffff'
    //         // }
    //         'layout': {
    //             'icon-image': 'custom-marker',
    //             'icon-allow-overlap': true
    //         }
    //     });

    //     // When a click event occurs on a feature in the places layer, open a popup at the
    //     // location of the feature, with description HTML from its properties.
    //     map.on('click', 'courses', function (e) {
    //         const coordinates = e.features[0].geometry.coordinates.slice();
    //         const description = e.features[0].properties.popUpMarkup;
        
    //         // Ensure that if the map is zoomed out such that multiple
    //         // copies of the feature are visible, the popup appears
    //         // over the copy being pointed to.
    //         while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    //         }
            
    //         new mapboxgl.Popup()
    //         .setLngLat(coordinates)
    //         .setHTML(description)
    //         .addTo(map);
    //     });
        
    //     // Change the cursor to a pointer when the mouse is over the places layer.
    //     map.on('mouseenter', 'courses', function () {
    //         map.getCanvas().style.cursor = 'pointer';
    //     });
        
    //     // Change it back to a pointer when it leaves.
    //     map.on('mouseleave', 'courses', function () {
    //         map.getCanvas().style.cursor = '';
    //     });
        
    //     });
    // });
        







 




   
 