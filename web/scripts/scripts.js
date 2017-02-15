
"use strict";

/**
 * ES6 Class.
 */
class drupalConnector {

	constructor() {
		this.node = this.get('https://service.nanosmid.nl/node/1?_format=api_json');
	}

	// This is the old method using an old fashioned xmlhttprequest.
	oldGet(url) {
    	var Httpreq = new XMLHttpRequest(); 
    	Httpreq.open("GET",url,false);
    	Httpreq.send(null);
    	return Httpreq.responseText;          
	}

	// https://jakearchibald.com/2015/thats-so-fetch
	get(url) {
		// This could be further enhanced using ES7 await.
		fetch(url).then(function(response) {
		  return response.json();
		}).then(function(data) {
			console.log('Connected to Drupal!');
			var h1 = document.createElement("h1")
			var title = document.createTextNode(data.attributes.title);
			var body = document.createTextNode(data.attributes.body.value);
			h1.appendChild(title);
			document.getElementById('content').appendChild(h1);
			document.getElementById('content').appendChild(body);
		}).catch(function() {
		  console.log("Booo");
		});
	}

}

var api = new drupalConnector();