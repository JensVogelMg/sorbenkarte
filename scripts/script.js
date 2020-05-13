// jshint esversion:8
const mymap = L.map('mapid', {
    center: [51.4454, 14.3420],
    zoom: 11
});

// Icons

const pinkIcon = L.icon({
    iconUrl: 'scripts/images/marker-icon_pink.png',
    shadowUrl: 'scripts/images/marker-shadow.png',

    //iconSize: [38, 95], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Marker
const markStMichael = L.marker([51.1721733, 14.4676197], { icon: pinkIcon }).addTo(mymap)
    .bindPopup('<b> KiTa "St. Michael" </b><br /> OT Auritz <br>Obere Straße 15<br>02625 Bautzen<br>Tel. 03591 22655 ');

const markJanRadyserbWjela = L.marker([51.1767104, 14.4355499])
    .addTo(mymap)
    .bindPopup('<b>Sorbische Kindertagesstätte „Jan Radyserb-Wjela“</b><br /> Friedrich-Engels-Platz 8<br>02625 Bautzen <br> Tel.: 03591 47092 ');

const markKnLand = L.marker([51.1889009, 14.4438748])
    .addTo(mymap)
    .bindPopup('<p><strong>Kindertagesstätte „Knirpsenland“</strong><br>Fr.-J.-Curie-Straße 63<br>02625 Bautzen<br>Tel.: 03591 22184</p>');
const markGlKaef = L.marker([51.1868960, 14.4332711], { icon: pinkIcon })
    .addTo(mymap)
    .bindPopup('<p><strong>Kindertagesstätte „Glückskäfer“</strong><br>Flinzstr.15 b <br>02625 Bautzen <br>Tel.: 03591 490715 </p>');
const markLutki = L.marker([51.4672809, 14.2254420], {
        icon: pinkIcon
    })
    .addTo(mymap)
    .bindPopup('<p><strong>Kindertagesstätte „Lutki“</strong><br>OT Bergen <br>Am Anger 27 <br>02979 Elsterheide <br>Tel.: 03571 913488 </p>');

// Marker - Gruppen

const kiGas = L.layerGroup([markStMichael, markJanRadyserbWjela, markKnLand, markLutki]).addTo(mymap);
const trachten = L.layerGroup([markStMichael, markGlKaef]).addTo(mymap);


const streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2hvc3RmYWNlNzYiLCJhIjoiY2thNGc2cXlnMGN1aTNtb2Fjc21xenB2dyJ9.6jqJkhklyriblBhXo-8_0A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href = "https://creativecommons.org/licenses/by-sa/2.0/" > CC - BY - SA < /a>, Imagery © ' +
        '<a href = "https://www.mapbox.com/" > Mapbox < /a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    //accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

const outdoor = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2hvc3RmYWNlNzYiLCJhIjoiY2thNGc2cXlnMGN1aTNtb2Fjc21xenB2dyJ9.6jqJkhklyriblBhXo-8_0A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/"> CC - BY - SA < /a>, Imagery © ' +
        ' <a href="https://www.mapbox.com/"> Mapbox < /a>',
    maxZoom: 20,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

const sat = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2hvc3RmYWNlNzYiLCJhIjoiY2thNGc2cXlnMGN1aTNtb2Fjc21xenB2dyJ9.6jqJkhklyriblBhXo-8_0A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/"> CC - BY - SA < /a>, Imagery © ' +
        ' <a href="https://www.mapbox.com/"> Mapbox < /a>',
    maxZoom: 20,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

const baseMaps = {
    "Streets": streets,
    "Outdoor": outdoor,
    "Sattelite": sat
};

const overlayMaps = {
    "Kindertagesstätten": kiGas,
    "Trachten": trachten
};



L.control.layers(baseMaps, overlayMaps).addTo(mymap);