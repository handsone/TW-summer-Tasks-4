'use strict';

function choose_no_repeat_number(collection) {
	var position ;
	var answer = [] ;
	for ( var A of collection ){
		position = answer.indexOf(A);
		if ( position  === -1 )
			answer.push(A);
	}
	return answer ;
}

module.exports = choose_no_repeat_number;
