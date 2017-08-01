'use strict';

function collect_max_number(collection) {
	var max  = 0 ;
	for ( let A of collection ){
		if (A > max){
			max = A;
		}
	}
	return max ;
}

module.exports = collect_max_number;
