'use strict';

function find_first_even(collection) {
	for ( var A of collection ){
		if ( A % 2 === 0  )
			return A ;
	}
}

module.exports = find_first_even;

