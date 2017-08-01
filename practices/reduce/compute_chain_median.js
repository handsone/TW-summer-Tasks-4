'use strict';

function compute_chain_median(collection) {
	var string = collection.split('->');
	var answer = [] ;
	for ( var A of string ){
		answer.push(Number(A));
	}
	function sortnumber (a , b ){
		return a - b ;
	}
	answer.sort(sortnumber);
	return  (answer[answer.length / 2  - 1 ] + answer[answer.length / 2]) / 2 ;
}

module.exports = compute_chain_median;
