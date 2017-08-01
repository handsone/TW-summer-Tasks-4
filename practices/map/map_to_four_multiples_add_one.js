'use strict';
var map_to_four_multiples_add_one = function(collection){
 	var answer = [] ;
	answer = collection.map(function(item){
		return item * 4 + 1 ;
	})	
	return answer;
};

module.exports = map_to_four_multiples_add_one;
