'use strict';
var even_asc_odd_desc = function(collection){
	function sortup(a , b){
		return a - b ;
	}
	function sortdown(a , b ){
		return b - a ;
	}
	var arr1 = collection.filter(function(x){
		return x % 2 === 0 ;
	})
	var arr2 = collection.filter(function(x){
		return x % 2 != 0 ;
	})
	var arr3 = arr1.sort(sortup).concat(arr2.sort(sortdown));
	return arr3 ;
};
module.exports = even_asc_odd_desc;
