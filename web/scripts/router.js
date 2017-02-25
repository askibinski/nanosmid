
"use strict";

/**
 * NanoRouter (ES6) dlass.
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

		this.loadCurrent();
		
		// Adding popstate event listener to handle browser back button  
    	window.addEventListener("popstate", (e) => this.loadCurrent());

	}

	loadCurrent() {
		let route = this.check(location.pathname);
		if (route !== false) {
			this.navigate(route);
		}
	}

	check(path) {
		var path = this.clearSlashes(path);
		var routes = this.getRoutes();
		for (var i = 0; i < routes.length; i++) {
			if (routes[i].route == path) {
				return routes[i];
			}
		}
		return false
	}

	// Scanning the document for all links which should be internal routes.
	scan() {
		let links = document.querySelectorAll('[data-nanorouter]');
		for (var i = 0; i < links.length; i++) {
		  let path = this.clearSlashes(links[i].getAttribute('href'));
		  let nid = links[i].getAttribute('data-nanorouter');
		  this.add(path, nid);
		  links[i].addEventListener('click', (e) => this.click(e, path));
		}
	}

	clearSlashes(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

	// Event handler for clicking a (scanned) link.
	click(e, path) {
		var route = this.check(path);
		if (route !== false) {
			this.navigate(route);
			history.pushState(null, null, this.root + route.route);
			e.preventDefault();	
		}
	}

	navigate(route) {
		if (route.nid) {
			drupal.getNid(route.nid);
		} else {
			console.log('I do not recognize this route');
			// @TODO We only support nids for now.
		}
	}

}

var router = new nanoRouter();
