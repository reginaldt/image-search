'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SearchHistory = new Schema({
	sHistory_id: Number,
	term : String,
	when : String
		
});

module.exports = mongoose.model('SearchHistory', SearchHistory);
