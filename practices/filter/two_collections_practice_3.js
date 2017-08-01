'use strict';

function choose_divisible_integer(collection_a, collection_b) {
		var answer = [] ;

	answer = collection_a.filter(function (x){
	return  x % collection_b[0] === 0 || x % collection_b[1] === 0 || x % collection_b[2] === 0 ;
		
		}
	)
	return answer ;
}

module.exports = choose_divisible_integer;
