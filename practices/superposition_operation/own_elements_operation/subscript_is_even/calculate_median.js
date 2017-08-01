'use strict';
var calculate_median = function(collection){
	var arr = collection.filter((x,index) => index % 2 != 0);
	if (arr.length % 2 === 0){
		return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2 ;
	}
	else {
		return arr[ Math.floor(arr.length / 2)];
	}
};
module.exports = calculate_median;
