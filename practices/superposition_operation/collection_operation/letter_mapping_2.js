'use strict';

function average_to_letter(collection) {
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
	var sum = collection.reduce(function(prev, cur){
		return prev + cur ;
	})
	return convertToTitle(Math.ceil(sum / collection.length ));
}

module.exports = average_to_letter;

