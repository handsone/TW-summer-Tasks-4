'use strict';

function get_letter_interval_2(number_a, number_b) {

	var convertToTitle = function(n) {
		var ans = '';
		while (n) {
			if (n % 26 === 0) {
				ans += String.fromCharCode(26 + 96);
				n = (n / 26) - 1;
			}
			else {
				ans += String.fromCharCode(n % 26 + 96);
				n = ~~(n / 26);
			}
		}

		return ans.split('').reverse().join('');
	};
	var answer = [] ;
	if (number_a < number_b){
		for ( var i = number_a ; i <= number_b ; i++ ){
			answer.push(convertToTitle(i));
		}
	}
	else {
		for ( var i = number_a ; i >= number_b ; i -- ){
			answer.push(convertToTitle(i));
		}
	}
	return answer ;
}
			

module.exports = get_letter_interval_2;

