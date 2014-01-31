var customIcons = {
 restaurant: {
   icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png'
 },
 bar: {
   icon: 'http://labs.google.com/ridefinder/images/mm_20_red.png'
 }
};

function load() {
 var map = new google.maps.Map(document.getElementById("map"), {
   center: new google.maps.LatLng($lattitude, $longitude),
   zoom: $zoom,
   mapTypeId: 'satellite',
 });
 map.setTilt(0);
 // Zones Go Here
 // Points go here
}

function bindInfoWindow(marker, map, infoWindow, html) {
 google.maps.event.addListener(marker, 'click', function() {
   infoWindow.setContent(html);
   infoWindow.open(map, marker);
 });
}

function downloadUrl(url, callback) {
 var request = window.ActiveXObject ?
	new ActiveXObject('Microsoft.XMLHTTP') :
	new XMLHttpRequest;

 request.onreadystatechange = function() {
   if (request.readyState == 4) {
	request.onreadystatechange = doNothing;
	callback(request, request.status);
   }
 };

 request.open('GET', url, true);
 request.send(null);
}

function doNothing() {}
