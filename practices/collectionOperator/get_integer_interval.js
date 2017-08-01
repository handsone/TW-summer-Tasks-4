'use strict';

function get_integer_interval(number_a, number_b) {
	var answer = [] ;
	if ( number_a < number_b  ){
		for ( var i = number_a ; i <= number_b ; i++ )
			answer.push(i);
	}
	else {
		for ( var i = number_a ; i >= number_b ; i-- )
			answer.push(i);
	}
	return answer; 
}

module.exports = get_integer_interval;

