'use strict';

function double_to_one(collection) {

	var answer = [] ;
	answer.push(collection.shift());
	for ( var A of collection ){
		for ( var B of A ){
			answer.push(B);
		}
	}
	return answer ;
}

module.exports = double_to_one;
