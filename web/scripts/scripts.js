
/**
 * ES6 Class.
 */
class drupalConnector {

	constructor() {
		this.hello();
		this.node1 = this.get('https://service.nanosmid.nl/node/1?_format=api_json');
		console.log(JSON.parse(this.node1));
	}

	hello() {
		console.log('hi!');
	}

	get(url) {
    	var Httpreq = new XMLHttpRequest(); 
    	Httpreq.open("GET",url,false);
    	Httpreq.send(null);
    	return Httpreq.responseText;          
	}

	// TODO: ombouwen naar async met promise:
	// https://www.tomas-dvorak.cz/posts/nodejs-request-without-dependencies/

}

var api = new drupalConnector();