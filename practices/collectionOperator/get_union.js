'use strict';

function get_union(collection_a, collection_b) {
			var answer = [] ;
	    		var position ;
	var arrA = collection_a.concat(collection_b);
	for ( var A of arrA ){
		position = answer.indexOf(A);
		if (position === -1 ){
			answer.push(A);
		}
	}
	return answer	;
}

module.exports = get_union;

