'use strict';

function choose_multiples_of_three(collection) {

	var answer  = [] ;
	for ( var A of collection ){
		if ( A % 3 == 0 )
			answer.push(A);
	}
	return answer ;
}

module.exports = choose_multiples_of_three;
