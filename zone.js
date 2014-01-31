var zoneCoords = [
	new google.maps.LatLng(42.992361, -71.467367),
	new google.maps.LatLng(42.992561, -71.467367),
	new google.maps.LatLng(42.992561, -71.467567),
	new google.maps.LatLng(42.992361, -71.467567),
	new google.maps.LatLng(42.992361, -71.467367)
];

// Construct the polygon.
zone = new google.maps.Polygon({
	paths: zoneCoords,
	strokeColor: 'gold',
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: 'green',
	fillOpacity: 0.35
});

zone.setMap(map);
