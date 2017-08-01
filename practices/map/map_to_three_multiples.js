'use strict';
var map_to_three_multiples = function(collections){
	var answer = collections.map(function(item){
		return item * 3 ;
	})
	return answer ;
};

module.exports = map_to_three_multiples;
