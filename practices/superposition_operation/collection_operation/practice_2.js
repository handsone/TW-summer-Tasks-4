'use strict';

function hybrid_operation_to_uneven(collection) {
	var item = collection.filter(function(x , index){
		return x % 2 != 0 ;
	})
	var arr  = item.map(function(num){
		return num * 3 + 2 ;
	})
	return arr ; 
}

module.exports = hybrid_operation_to_uneven;

