'use strict';

function grouping_count(collection) {
	var position ;
	var words = [] ;
	var numberfrequency = [];
	for ( var A of collection ){
		position = words.indexOf(A);
		if ( position === -1  ){
			words.push(A);
			numberfrequency.push(1);
		}
		else {
			numberfrequency[position] ++;
		}

	}
	var answer  = {} ;
	for ( var i = 0 ; i < words.length ; i ++ ){
		answer[String(words[i])] = numberfrequency[i];
	}
	return answer;
}

module.exports = grouping_count;
