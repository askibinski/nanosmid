
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
		document.getElementById('page_title').innerHTML = "";
		document.getElementById('page_title').innerHTML = data.attributes.title;
		document.getElementById('content').innerHTML = "";
		document.getElementById('content').innerHTML = data.attributes.body.value;
	}

}

export let drupal = new Drupal();
