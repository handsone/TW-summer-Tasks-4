'use strict';

function hybrid_operation_to_uneven(collection) {

	var arrA = collection.filter(function(x){
		return x % 2 != 0;
	})
	var arrB = arrA.map (function( item ){
		return item * 3 + 5 ;
	})
	var sum = arrB.reduce(function (prev , cur ){
		return prev + cur ;
	})
	return sum ; 
}

module.exports = hybrid_operation_to_uneven;

