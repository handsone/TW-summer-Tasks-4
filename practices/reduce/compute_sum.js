'use strict';

function calculate_elements_sum(collection) {
	var sum  = 0 ; 
	for ( var A of collection ){
		sum += A ;
	}
	return sum ;
}

module.exports = calculate_elements_sum;

