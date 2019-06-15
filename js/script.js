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

images = shuffle(images);

const totalRows = Math.floor(images.length / 3);
var currentRow = 0;
var mainImageContainer = document.getElementById("gallery_images");

function createImageContainers() {
	// get container for images
	let row = -1;
	// create images with containers
	images.forEach(function(imgageData, index){
		row += (index % 3) == 0 ? 1 : 0;
		// container in flex element
		let imageContainer = document.createElement("div");
		imageContainer.setAttribute("class", "image_container");
		// span for vertical alignment
		let verticalAlign = document.createElement("span");
		verticalAlign.setAttribute("class", "image_alignment");
		// image tag
		let imageTag = document.createElement("img");		
		imageTag.setAttribute("class", "image image_row_" + row);
		imageTag.setAttribute("src", imgageData.src);
		imageTag.setAttribute("alt", imgageData.alt);
		// add elements to dom
		imageContainer.appendChild(verticalAlign);
		imageContainer.appendChild(imageTag);
		mainImageContainer.appendChild(imageContainer);
		// add event listener
		imageContainer.addEventListener('click', function() {
			this.classList.toggle('zoom');
		});
	});
}

// calculate scrolling distance depending on screen orientation
function scrollImages(forward){
	currentRow += forward ? 1 : -1;
	if(currentRow > totalRows) {
		currentRow = 0;
	}
	if(currentRow < 0) {
		currentRow = totalRows-1;
	}
	setRowPosition();
}

function setRowPosition() {
	if (window.matchMedia("(orientation: portrait)").matches) {
		let style = "top: calc(-" + currentRow + " * (100vh - 120px)); left: 0%";
		mainImageContainer.setAttribute("style", style);
	} else {
		let margin = -100 * currentRow;
		let style = "top: 0%; left:" + margin + "%;";
		mainImageContainer.setAttribute("style", style);
	}
}

createImageContainers();

window.onresize = function(){ setRowPosition(); }

// grabbed from stackoverflow
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