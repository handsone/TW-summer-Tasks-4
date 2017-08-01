'use strict';
function map_to_even(collection){
	var answer = collection.map(function (item){
		return 2 * item ;
	})
	return answer ;
}
module.exports = map_to_even;
