var lattitude = 0;
var longitude = 0;
var image = 'http://localhost/php/SnowLoad/button.png';
var point = new google.maps.LatLng(lattitude, longitude);
var marker = new google.maps.Marker({
	position: point,
	map: map,
	icon: image
});
marker.setMap(map);
