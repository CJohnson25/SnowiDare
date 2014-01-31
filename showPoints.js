function parsePoints() {
	var points = document.getElementsByTagName("point");
	//var canvas = initializeCanvas();
	var location = document.getElementsByTagName("location")[0];
	var myLat = location.getElementsByTagName("lattitude")[0].innerHTML;
	var myLon = location.getElementsByTagName("longitude")[0].innerHTML;
	var width = document.getElementById("map3d").style.width;
	width = parseInt(width.substring(0, width.length -2))/2;
	var height = document.getElementById("map3d").style.height;
	height = parseInt(height.substring(0, height.length -2))/2;
	for(var i=0; i<points.length; i++) {
		var lat = points[i].getElementsByTagName("lattitude")[0].innerHTML;
		var lon = points[i].getElementsByTagName("longitude")[0].innerHTML;
		var diffLat = Math.floor((parseInt(myLat) - parseInt(lat))/5);
		var diffLon = Math.floor((parseInt(myLon) - parseInt(lon))/5);
		var x = 8 + width - diffLon;
		var y = 8 + height + diffLat;
		buildCanvas(createInfoNode(), x, y);
	}
}

function buildCanvas(node, x, y) {
	node.style.left = x + "px";
	node.style.top = y + "px";
	document.getElementById("map_container").appendChild(node);

	/*// create an IFRAME shim for the button
	var iframeShim = document.createElement('iframe');
	iframeShim.frameBorder = 0;
	iframeShim.scrolling = 'no';
	iframeShim.src = (navigator.userAgent.indexOf('MSIE 6') >= 0) ? '' : 'javascript:void(0);';
	var pluginRect = getElementRect(document.getElementById('map3d'));
	iframeShim.style.position = 'absolute';
	iframeShim.style.left = (pluginRect.left + x) + 'px';
	iframeShim.style.top = (pluginRect.top + y) + 'px';
	iframeShim.style.width = width + 'px';
	iframeShim.style.height = height + 'px';
	iframeShim.style.zIndex = canvas.style.zIndex - 1;
	document.body.appendChild(canvas);
	document.body.appendChild(iframeShim);
	return canvas;*/
}

function createInfoNode() {
	var image = document.getElementById("button_image");
	var node = document.createElement("div");
	node.style.position = 'absolute';
	node.width = "20"
	node.height = "20"
	node.style.backgroundColor = "white";
	node.style.border="solid 1px #000000";
	node.style.zIndex = 100;
	node.appendChild(image.cloneNode(false));
	return node;
}
