
"use strict";

/**
 * ES6 Class.
 */
class nanoRouter {


	constructor() {
		// We are using closures here to store "private" data.
		// If we would be using "this.routes" then routes could be added through
		// router.routes.push('bla'); 
		// Now we force the use of the API method "add".

		let routes = [];

		this.root = '/';
		
		// We are assuming here all links are to other Drupal nodes
		// and we store the nids in our routes array.
		this.add = function(route, nid) {
			let routeObj = {nid: nid, route: route}
			routes.push(routeObj);
		}
		this.getRoutes = function() {
			return routes;
		}

		this.scan();

		this.checkCurrent();

	}

	checkCurrent() {
		var routes = this.getRoutes();
		for (let route of routes) {
			if (route.route == this.clearSlashes(location.pathname)) {
				//console.log(`match: ${route}`);
				this.navigate(route);
			}
		}
	}

	// Scanning the document for all links which should be internal routes.
	scan() {
		let links = document.querySelectorAll('[data-nanorouter]');
		for (let link of links) {
		  //console.log(value.getAttribute('href'));
		  let path = this.clearSlashes(link.getAttribute('href'));
		  let nid = link.getAttribute('data-nanorouter');
		  this.add(path, nid);
		  link.addEventListener('click', (e) => this.click(e, path));
		}
	}

	clearSlashes(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

	// Event handler for clicking a (scanned) link.
	click(e, path) {
		var routes = this.getRoutes();
		for (let route of routes) {
			if (route.route == path) {
				//console.log(`match: ${route}`);
				this.navigate(route);
				e.preventDefault();
			}
		}
	}

	navigate(route) {
		if (route.nid) {
			console.log(`this is a nid: ${route.nid}`);
			api.getNid(route.nid);
		} else {
			console.log('I do not recognize this route');
			// @TODO We only support nids for now.
		}
		history.pushState(null, null, this.root + route.route);
  		console.log(route.route);
	}

}

var router = new nanoRouter();
