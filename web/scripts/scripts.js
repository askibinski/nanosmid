
/*
document.querySelector(selector) — fetches the first matching node only
document.getElementById(idname) — fetches a single node by its ID name
document.getElementsByTagName(tagname) — fetches nodes matching an element (e.g. h1, p, strong, etc).
document.getElementsByClassName(class) — fetches nodes with a specific class name
*/


/**
 * ES6 Class.
 */
class theArea {

	constructor(x = 400, y = 300) {
		this.x = x;
		this.y = y;

		this.canvasElement = document.getElementById('cleanbot');
		this.canvas = this.canvasElement.getContext('2d');

		this.canvasElement.width = 800;
		this.canvasElement.height = 600;

		// We need the offset of the canvas element so we use
		// relative coordinates when creating stuff on the canvas.
		var rect = this.canvasElement.getBoundingClientRect();
		this.x_offset = rect.left;
		this.y_offset = rect.top;
		//console.log(`x offset = ${this.x_offset}`);
		//console.log(`y offset = ${this.y_offset}`);

		this.initBot();

		this.canvasElement.addEventListener('click', (e) => this.canvasClick(e));

		console.log(`${x} and ${y}`);
	}

	initBot() {
		this.canvas.beginPath();
		this.canvas.arc(this.x, this.y, 50, 0, 2*Math.PI);
		this.canvas.stroke();
	}

	canvasClick(e) {
		console.log('Click!');
		console.log(e.x);
		console.log(e.y);
		console.log(this.x_offset);
		console.log(this.y_offset);
		let x = this.x_offset + e.x;
		let y = this.y_offset + e.y;
		this.createDirt(x, y);
	}

	createDirt(x, y) {
		console.log('create dirt!');
		console.log(x);
		console.log(y);
		this.canvas.beginPath();
		this.canvas.arc(x, y, 10, 0, 2*Math.PI);
		this.canvas.stroke();
	}

}

var area = new theArea();