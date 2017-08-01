'use strict';

function hybrid_operation(collection) {

	var arr =  collection.map(function(item){
		return item * 3 + 2 ;
	})
	var sum = arr.reduce(function(prev , cur ){
		return prev + cur ;
	})
	return sum ;
}

module.exports = hybrid_operation;

