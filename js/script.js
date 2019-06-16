// images
var images = [
	{src:"images/blue-winter-landscape-scenery.jpg", alt:"Winterlandschaft"},
	{src:"images/1174-4517.jpg", alt:"Dubai"},
	{src:"images/maxresdefault.jpg", alt:"Hellblade"},
	{src:"images/proxy.duckduckgo.com.jpg", alt:"Landschaft"},
	{src:"images/proxy.duckduckgo.com2.jpg", alt:"Sonnenuntergang"},
	{src:"images/Yakuza-Kiwami-2-1.jpg", alt:"Yakuza"},
	{src:"images/Unbenannt.png", alt:"Geier"},
	{src:"images/TS_AnonHP_149000668_03.jpg", alt:"Bild"},
	{src:"images/394230.jpg", alt:"Schaukel"},
	{src:"images/img12.jpg", alt:"Muster"},
	{src:"images/Jf4DW2w.jpg", alt:"Tech"},
	{src:"images/ku_bkc_ttu_08_t1200.jpg", alt:"Basketball"},
	{src:"images/Pont_du_Diable_-_Céret.JPG", alt:"Pont du Diable -Céret"},
	{src:"images/stock-free-angel-images-14032016-photo-571.jpg", alt:"Engel"},
	{src:"images/tech.jpg", alt:"Tech 2"},
	{src:"images/virginia_tech.jpg", alt:"Virginia Tech"},
	{src:"images/road-free-stock-images.jpg", alt:"Straße"}
];

// shuffle images
images = shuffle(images);

// get values for calculations
const totalScreens = Math.ceil(images.length / 3);
var currentPosition = 0;

// elements
var mainImageContainer = document.getElementById("gallery_images");
var zoomImageContainer = document.getElementById("image_zoom_overlay");
var zoomImage = document.getElementById("image_zoom");
var currentImage;

// initial function
function createImageContainers() {
	// get container for images
	// create images with containers
	images.forEach(function(imgageData, index){
		// container in flex element
		let imageContainer = document.createElement("div");
		imageContainer.setAttribute("class", "image_container");
		// add event listener
		// span for vertical alignment
		let verticalAlign = document.createElement("span");
		verticalAlign.setAttribute("class", "image_alignment");
		// image tag
		let imageTag = document.createElement("img");		
		imageTag.setAttribute("class", "image");
		imageTag.setAttribute("src", imgageData.src);
		imageTag.setAttribute("alt", imgageData.alt);
		imageTag.addEventListener('click', function() {
			currentImage = this;
			this.classList.add('zoom_out');
			let imageSource = this.getAttribute("src"); 
			zoomImage.setAttribute('src', imageSource);
			zoomImageContainer.classList.add('zoom');
		});
		// add elements to dom
		imageContainer.appendChild(verticalAlign);
		imageContainer.appendChild(imageTag);
		mainImageContainer.appendChild(imageContainer);
	});
}

// hide zoomed image
function hideZoomImage() {
	zoomImageContainer.classList.remove('zoom');
	currentImage.classList.remove("zoom_out");
}

// calculate current position to scroll to
function scrollImages(forward){
	currentPosition += forward ? 1 : -1;
	if(currentPosition >= totalScreens) {
		currentPosition = 0;
	}
	if(currentPosition < 0) {
		currentPosition = totalScreens-1;
	}
	setScrollPosition();
}

// set scrolling distance depending on screen orientation
function setScrollPosition() {
	if (window.matchMedia("(orientation: portrait)").matches) {
		let style = "top: calc(-" + currentPosition + " * (100vh - 120px)); left: 0%";
		mainImageContainer.setAttribute("style", style);
	} else {
		let margin = -100 * currentPosition;
		let style = "top: 0%; left:" + margin + "%;";
		mainImageContainer.setAttribute("style", style);
	}
}

// initial function call
createImageContainers();

// refresh scroll position on screen resize
window.onresize = function(){ setScrollPosition(); }

// shuffle method from stackoverflow
function shuffle(array) {
	var m = array.length, t, i;
	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);
		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}