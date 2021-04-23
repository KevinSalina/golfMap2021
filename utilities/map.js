const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const mapboxgl = require('mapbox-gl')
const mapBoxToken = process.env.MAPBOX_TOKEN;

mapboxgl.accessToken = mapBoxToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });


alert('WHTA')