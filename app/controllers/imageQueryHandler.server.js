'use strict';

var SHistory = require('../models/searchHistory.js');
var config = require('../config/settings.js');
var Bing = require('node-bing-api')({ accKey: config.BING_KEY });

function ImageQueryHandler () {

	var that = this;

	this.getResults = function(req,res){
		//control favicon
		var imageFilters = {};
		var query = req.params.query;
		var returnData = [];

		if (req.url === '/favicon.ico') {
		    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
		    res.end();
		    console.log('favicon requested');
		    return;
		}

		if(req.query.offset != null){
			imageFilters['top'] = req.query.offset;
		}	

		Bing.images(query, imageFilters, function(error, Bingres, body){
			// if (error) throw error;
			var results = body["d"]["results"];
			var when = new Date().toISOString();

			results.forEach(function(obj){
				returnData.push({
					url : obj["MediaUrl"],
					snippet : obj["Title"],
					thumbnail : obj["Thumbnail"]["MediaUrl"],
					context : obj["SourceUrl"]

				});
			});

			that.saveQuery(query,when);
		  	res.json(returnData);
		});
	}

	this.getRecentSearch = function(req,res){
		//control favicon

		if (req.url === '/favicon.ico') {
		    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
		    res.end();
		    console.log('favicon requested');
		    return;
		}

		SHistory.find({}).limit(10)
		.select({ 'term': 1, 'when' : 1,'_id' : 0})
		.sort({'when': 'desc'})
		.exec(function(err,lists){
			if(err) throw err;
			res.json(lists);
		});
	}

	this.saveQuery = function(query, time){

		SHistory.count({},function(err,count){
			if(err) throw err;

			var SHistoryID = parseInt(count) +1;
			var insertData = new SHistory({
				'sHistory_id' : SHistoryID,
				'term' : query,
				'when' : time
			});
			insertData.save();
		});
	}


}

module.exports = ImageQueryHandler;
