L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uYXRoZXB1ZyIsImEiOiJTMzJLTGVZIn0.DW5BhWGXP3s2fKr05b4X-Q';

var map = L.mapbox.map('map', 'examples.map-i86nkdio').setView([42.5, 13], 8);

$.getJSON('data.json', function(data) {  
  $(data['markers']).each(function(index, markerData){
    var marker = L.marker(markerData['coords']);
    marker.bindPopup('<b>' + markerData['title'] + '</b>');
    marker.addTo(map);
  });
});
