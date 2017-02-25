
"use strict";

/**
 * DrupalConnector (ES6) Class.
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var drupalConnector = function () {
	function drupalConnector() {
		_classCallCheck(this, drupalConnector);
	}

	_createClass(drupalConnector, [{
		key: 'getNid',
		value: function getNid(nid) {
			this.node = this.get('https://service.nanosmid.nl/node/' + nid + '?_format=api_json');
		}
	}, {
		key: 'get',
		value: function get(url) {
			var _this = this;

			fetch(url).then(this.status).then(this.json).then(function (data) {
				return _this.showNid(data);
			}).catch(function (e) {
				return console.log(e);
			});
		}
	}, {
		key: 'status',
		value: function status(response) {
			if (response.status >= 200 && response.status < 300) {
				return Promise.resolve(response);
			} else {
				return Promise.reject(new Error('Looks like there was a problem. Status Code: ' + response.status));
			}
		}
	}, {
		key: 'json',
		value: function json(response) {
			return response.json();
		}
	}, {
		key: 'showNid',
		value: function showNid(data) {
			//console.log('Connected to Drupal!');
			var h1 = document.createElement("h1");
			var title = document.createTextNode(data.attributes.title);
			var body = document.createTextNode(data.attributes.body.value);
			h1.appendChild(title);
			document.getElementById('content').innerHTML = "";
			document.getElementById('content').appendChild(h1);
			document.getElementById('content').appendChild(body);
		}
	}]);

	return drupalConnector;
}();

var drupal = new drupalConnector();

"use strict";

/**
 * NanoRouter (ES6) dlass.
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nanoRouter = function () {
	function nanoRouter() {
		var _this = this;

		_classCallCheck(this, nanoRouter);

		// We are using closures here to store "private" data.
		// If we would be using "this.routes" then routes could be added through
		// router.routes.push('bla'); 
		// Now we force the use of the API method "add".

		var routes = [];

		this.root = '/';

		// We are assuming here all links are to other Drupal nodes
		// and we store the nids in our routes array.
		this.add = function (route, nid) {
			var routeObj = { nid: nid, route: route };
			routes.push(routeObj);
		};
		this.getRoutes = function () {
			return routes;
		};

		this.scan();

		this.loadCurrent();

		// Adding popstate event listener to handle browser back button  
		window.addEventListener("popstate", function (e) {
			return _this.loadCurrent();
		});
	}

	_createClass(nanoRouter, [{
		key: "loadCurrent",
		value: function loadCurrent() {
			var route = this.check(location.pathname);
			if (route !== false) {
				this.navigate(route);
			}
		}
	}, {
		key: "check",
		value: function check(path) {
			var path = this.clearSlashes(path);
			var routes = this.getRoutes();
			for (var i = 0; i < routes.length; i++) {
				if (routes[i].route == path) {
					return routes[i];
				}
			}
			return false;
		}

		// Scanning the document for all links which should be internal routes.

	}, {
		key: "scan",
		value: function scan() {
			var _this2 = this;

			var links = document.querySelectorAll('[data-nanorouter]');

			var _loop = function _loop() {
				var path = _this2.clearSlashes(links[i].getAttribute('href'));
				var nid = links[i].getAttribute('data-nanorouter');
				_this2.add(path, nid);
				links[i].addEventListener('click', function (e) {
					return _this2.click(e, path);
				});
			};

			for (var i = 0; i < links.length; i++) {
				_loop();
			}
		}
	}, {
		key: "clearSlashes",
		value: function clearSlashes(path) {
			return path.toString().replace(/\/$/, '').replace(/^\//, '');
		}

		// Event handler for clicking a (scanned) link.

	}, {
		key: "click",
		value: function click(e, path) {
			var route = this.check(path);
			if (route !== false) {
				this.navigate(route);
				history.pushState(null, null, this.root + route.route);
				e.preventDefault();
			}
		}
	}, {
		key: "navigate",
		value: function navigate(route) {
			if (route.nid) {
				drupal.getNid(route.nid);
			} else {
				console.log('I do not recognize this route');
				// @TODO We only support nids for now.
			}
		}
	}]);

	return nanoRouter;
}();

var router = new nanoRouter();
//# sourceMappingURL=all.js.map
