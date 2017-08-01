'use strict';

function even_to_letter(collection) {
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
	var arrA = collection.filter (function (x){
		return x % 2 == 0 ;
	})
	var answer = arrA.map(function (item){
		return convertToTitle(item); 
	})
	return answer;
	
}

module.exports = even_to_letter;
