'use strict';

function average_uneven(collection) {

	var arr = collection.filter(function (x){
		return x % 2 != 0 ;  
	})
	var sum = arr.reduce(function (prev , cur ){
		return prev + cur ;
	})
	return sum / arr.length ;
}

module.exports = average_uneven;
