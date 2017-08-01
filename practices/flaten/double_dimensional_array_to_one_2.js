'use strict';

function double_to_one(collection) {
	var answer = [] ;
	var position ;
	for (var A of collection ){
		for (var B of A ){
		position = answer.indexOf(B);
			if (position === -1 )
				answer.push(B);
		}
	}
	return answer;
}

module.exports = double_to_one;
