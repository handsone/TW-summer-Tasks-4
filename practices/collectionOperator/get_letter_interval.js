'use strict';

function get_letter_interval(number_a, number_b) {
	var word = ['a','b','c','d','e'];
	var answer = []  ;
	if ( number_a < number_b ){
		for ( var i = number_a ; i <= number_b ; i++ ){
			answer.push(word[i - 1]);
		}
	}
	else {
		for ( i = number_a ; i >= number_b ; i-- ){
			answer.push(word[i - 1]);
		}
	}
	return answer ;
}

module.exports = get_letter_interval;
