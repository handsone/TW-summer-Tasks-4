'use strict';
var number_map_to_word = function(collection){

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
	var answer = collection.map(function(item){
		return convertToTitle(item);
	})
	return answer ;
};

module.exports = number_map_to_word;
