'use strict';

var path = process.cwd();
var SearchHistory = require(path + '/app/controllers/imageQueryHandler.server.js');

module.exports = function (app) {

	var sHistory = new SearchHistory();

	app.route('/api/latest/imagesearch/')
		.get(sHistory.getRecentSearch);

	app.route('/api/imagesearch/:query')
		.get(sHistory.getResults);



	// app.route('/:url_id')
	// 	.get(urlHandler.accessUrl);


	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});


};
