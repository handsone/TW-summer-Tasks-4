'use strict';

function find_last_even(collection) {
	for( var A of collection.reverse() ){
		if ( A % 2 === 0 )
			return A;
	}
}

module.exports = find_last_even;
