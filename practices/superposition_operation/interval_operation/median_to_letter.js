'use strict';

function median_to_letter(collection) {
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
	var num = Math.ceil((collection[collection.length / 2 -1] + collection[collection.length  / 2])/ 2); 
	return convertToTitle(num);	
}

module.exports = median_to_letter;
