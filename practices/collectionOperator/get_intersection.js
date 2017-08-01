'use strict';

function get_intersection(collection_a, collection_b) {
		let answer = [] ;
	for (var A of collection_b){
		for ( var B of collection_a ){
			if ( A === B  )
				answer.push(A);
		}
	}
	return answer;
}

module.exports = get_intersection;
