
"use strict";

/**
 * DrupalConnector (ES6) Class.
 */
class Drupal {

	constructor() {
		//console.log('start drupal');
	}

	getNid(nid) {
	  this.node = this.get('https://service.nanosmid.nl/node/' + nid + '?_format=api_json');
	}

	get(url) {
		fetch(url)
		.then(this.status)
		.then(this.json)
		.then(data => this.showNid(data))
		.catch(e => console.log(e));
	}

	status(response) {
		if (response.status >= 200 && response.status < 300) {  
			return Promise.resolve(response)  
		} else {  
			return Promise.reject(new Error('Looks like there was a problem. Status Code: ' +  
          response.status))  
		}  
	}

	json(response) {
		return response.json()  
	}

	showNid(data) {
		//console.log('Connected to Drupal!');
		var h1 = document.createElement("h1")
		var title = document.createTextNode(data.attributes.title);
		var body = document.createTextNode(data.attributes.body.value);
		h1.appendChild(title);
		document.getElementById('content').innerHTML = "";
		document.getElementById('content').appendChild(h1);
		document.getElementById('content').appendChild(body);
	}

}

export let drupal = new Drupal();