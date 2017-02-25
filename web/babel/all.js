
"use strict";

/**
 * ES6 Class.
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

		// https://jakearchibald.com/2015/thats-so-fetch

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
			console.log('Connected to Drupal!');
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

var api = new drupalConnector();

"use strict";

/**
 * ES6 Class.
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nanoRouter = function () {
	function nanoRouter() {
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

		this.checkCurrent();
	}

	_createClass(nanoRouter, [{
		key: 'checkCurrent',
		value: function checkCurrent() {
			var routes = this.getRoutes();
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var route = _step.value;

					if (route.route == this.clearSlashes(location.pathname)) {
						//console.log(`match: ${route}`);
						this.navigate(route);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		// Scanning the document for all links which should be internal routes.

	}, {
		key: 'scan',
		value: function scan() {
			var _this = this;

			var links = document.querySelectorAll('[data-nanorouter]');
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				var _loop = function _loop() {
					var link = _step2.value;

					//console.log(value.getAttribute('href'));
					var path = _this.clearSlashes(link.getAttribute('href'));
					var nid = link.getAttribute('data-nanorouter');
					_this.add(path, nid);
					link.addEventListener('click', function (e) {
						return _this.click(e, path);
					});
				};

				for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					_loop();
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	}, {
		key: 'clearSlashes',
		value: function clearSlashes(path) {
			return path.toString().replace(/\/$/, '').replace(/^\//, '');
		}

		// Event handler for clicking a (scanned) link.

	}, {
		key: 'click',
		value: function click(e, path) {
			var routes = this.getRoutes();
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = routes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var route = _step3.value;

					if (route.route == path) {
						//console.log(`match: ${route}`);
						this.navigate(route);
						e.preventDefault();
					}
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		}
	}, {
		key: 'navigate',
		value: function navigate(route) {
			if (route.nid) {
				console.log('this is a nid: ' + route.nid);
				api.getNid(route.nid);
			} else {
				console.log('I do not recognize this route');
				// @TODO We only support nids for now.
			}
			history.pushState(null, null, this.root + route.route);
			console.log(route.route);
		}

		// @TODO doesn't work on back-button yet.

	}]);

	return nanoRouter;
}();

var router = new nanoRouter();
//# sourceMappingURL=all.js.map
