'use strict';

function amount_even(collection) {

	var arr = collection.filter(function (x){
		return x % 2 === 0 ;
	})
	var sum = arr.reduceRight(function (prev , cur){
		return prev + cur ;
	})
	return sum  ;
}

module.exports = amount_even;
