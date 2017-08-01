'use strict';

function compute_average(collection) {
	var sum  = 0 ;
	for (let A of collection){
		sum += A ;
	}
	return sum / collection.length;
}

module.exports = compute_average;

