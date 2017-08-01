'use strict';

function choose_even(collection) {
	var answer = [] ;
	for ( var A of collection ){
		if (A % 2 === 0)
			answer.push(A);
	}
	return answer ;
}

module.exports = choose_even;
