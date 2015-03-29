L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uYXRoZXB1ZyIsImEiOiJTMzJLTGVZIn0.DW5BhWGXP3s2fKr05b4X-Q';

var map = L.mapbox.map('map', 'examples.map-i86nkdio').setView([41, 9], 6);
var marker = L.marker([41, 9])

marker.addTo(map);

marker.bindPopup('<strong>Ciao</strong>');
