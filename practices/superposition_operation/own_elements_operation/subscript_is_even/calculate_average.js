'use strict';
var calculate_average = function(collection){
	var arr = collection.filter(function(x ,index ){
		return index % 2 === 0 && index != 0 ;
	})
	return arr.reduce(function(prev ,cur ){
		return prev + cur ; 
	}) / 2  ;
};
module.exports = calculate_average;
