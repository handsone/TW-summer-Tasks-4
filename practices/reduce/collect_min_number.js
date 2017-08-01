'use strict';

function collect_min_number(collection) {
	var min = collection[0]  ; 
	for ( let A of collection  ){
		if ( A < min )
			min = A ;
	}
	return min ;
}

module.exports = collect_min_number;

