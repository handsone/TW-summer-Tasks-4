'use strict';

function choose_common_elements(collection_a, collection_b) {
	var answer = [] ;
	for ( let A of collection_a	){
		for ( let B of collection_b ){
			if ( A === B  )
				answer.push(A);
		}
	}
	return answer ;
}

module.exports = choose_common_elements;
