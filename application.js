L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uYXRoZXB1ZyIsImEiOiJTMzJLTGVZIn0.DW5BhWGXP3s2fKr05b4X-Q';

var map = L.mapbox.map('map', 'examples.map-i86nkdio').setView([40, -74.50], 9);
var marker = L.marker([40, -74.50])

setTimeout(function() {
  marker.addTo(map);
}, 2000);

setTimeout(function() {
  marker.setLatLng([40, -74]);
  marker.openPopup();

  setTimeout(function() {
    marker.dragging.enable();
  }, 4000);     

}, 3000);

marker.bindPopup('<strong>Ciao</strong>');
